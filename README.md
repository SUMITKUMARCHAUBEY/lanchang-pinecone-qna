# lanchang-pinecone-qna
This is a mern-stack project with
-backend in te "server" directory
-and the front-end in the "my-app" directory.

This project is a demonstration of how AI acn be used to make API's, in the form of which it can be delevered to the public.

To setup this project anywhere you will have to make a .env file and store the mongoDB database link and the OpenAi API key as well as the Pinecone API key  and the enviornment key.
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
                                                          BACK-END
                      
    ->       The mechenism in the back-end in a way that the user provides it with a link address of a video, and wants us
             to extract the audio information and answer his queries based on it.
                           
    ->       The backend can be explainde in three steps, in the first step we are transcribing the video with the help of the OpenAi
             whisper API.
             
    ->       In the second step we store the transcript in the mongoDB database in the form of text and Pinecone database in the form 
             of a vector embaddings.
             
    ->       In the thrid and the last step we try to answer the user based on the embadding stored in the Pinecone database using the openAI API.
 
 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
                                                          FRONT-END
    ->       The front end of this website has been developed using the React js framework, and is responsible for interfacing the API inputs and 
             and API results.

