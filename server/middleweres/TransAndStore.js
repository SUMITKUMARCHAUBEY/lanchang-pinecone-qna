require('dotenv').config();
const fs = require("fs");
var axios = require("axios");
var FormData = require("form-data");

const Note = require("../modle/trans");

const { PineconeClient } = require("@pinecone-database/pinecone");
const { Document } = require("langchain/document");
const { OpenAIEmbeddings } = require("langchain/embeddings/openai");
const { PineconeStore } = require("langchain/vectorstores/pinecone");
const { MarkdownTextSplitter } = require("langchain/text_splitter");

const { OpenAI } = require("langchain/llms/openai");
const { VectorDBQAChain } = require("langchain/chains");
// import { PineconeStore } from "langchain/vectorstores/pinecone";
// import { OpenAIEmbeddings } from "langchain/embeddings/openai";
// import { PineconeClient } from "@pinecone-database/pinecone";

const pineconeSetup = async (name, res) => {
  const client = new PineconeClient();
  await client.init({
    apiKey: process.env.Pinecone_Api_key,
    environment: process.env.Pinecone_enviornment,
  });

  const pineconeIndex = client.Index("index-1");
  await pineconeIndex.delete1({
    deleteAll: true,
  });

  const note = await Note.findOne({ id: name });
  const splitter = new MarkdownTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 0,
  });
  const chunks = await splitter.splitText(note.trans);
  const docs = chunks.map((chunk) => new Document({ pageContent: chunk }));

  const embeddings = new OpenAIEmbeddings({
    openAIApiKey: process.env.Open_Ai_Api_key,
  });

  await PineconeStore.fromDocuments(docs, embeddings, { pineconeIndex });
  console.log("Pushed into pinecone, we are ready to take your questions");
  res.status(200).json({ success: true });
};

const wisper = (url, name, res) => {
  console.log("whisper running..");

  var data = new FormData();
  data.append("model", "whisper-1");
  data.append("file", fs.createReadStream(`output${name}.mp3`));

  var config = {
    method: "post",
    url: "https://api.openai.com/v1/audio/transcriptions",
    headers: {
      Authorization:
        `Bearer ${process.env.Open_Ai_Api_key}`,
      Cookie:
        "_cfuvid=.9P9weIh0rbRz0VKiN3N4C5_3s8hZA3R19gmZjnqKd8-1681850119810-0-604800000",
      ...data.getHeaders(),
    },
    data: data,
  };

  axios(config)
    .then(async function (response) {
      console.log("we have the response, setting up the enviornment");
      const transcript = response.data.text;
      const note = new Note({
        id: url,
        trans: transcript,
      });
      await note
        .save()
        .then((d) => {
          try {
            fs.unlinkSync(`${name}.mp3`);
            fs.unlinkSync(`output${name}.mp3`);
            console.log("Delete File successfully.");
            pineconeSetup(url, res);
          } catch (error) {
            console.log(error);
          }

          // res.json({"success":true,"data":d.trans})
        })
        .catch((err) => {
          console.log(err);
        });
      //   fs.writeFileSync('text.txt', response.data.text);
    })
    .catch(function (error) {
      console.log(error);
    });
};

const qna = async (question, res) => {
  const client = new PineconeClient();
  await client.init({
    apiKey: "90f250d1-e28b-4538-a32d-f4e928e6a76b",
    environment: "us-west4-gcp",
  });

  const pineconeIndex = client.Index("index-1");

  const vectorStore = await PineconeStore.fromExistingIndex(
    new OpenAIEmbeddings({
      openAIApiKey: process.env.Open_Ai_Api_key,
    }),
    { pineconeIndex }
  );

  const model = new OpenAI({
    openAIApiKey: process.env.Open_Ai_Api_key,
  });
  const chain = VectorDBQAChain.fromLLM(model, vectorStore, {
    k: 1,
    returnSourceDocuments: true,
  });

  const response = await chain.call({
    query: question,
  });
  // console.log(response);
  res.status(200).json(response)
};

module.exports = { wisper, pineconeSetup,qna };
