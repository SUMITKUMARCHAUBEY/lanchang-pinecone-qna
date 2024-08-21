Lanchang Pinecone QnA
Overview
Lanchang Pinecone QnA is a demonstration project that showcases the integration of AI with APIs to provide a seamless experience for extracting information from video content and answering queries based on that information. The project is built using the MERN stack, with a backend that handles video transcription and data storage, and a frontend that provides an interactive interface for users.

Project Structure
Backend: Located in the server directory.
Frontend: Located in the my-app directory.

Features
Video Transcription: Transcribe video content using the OpenAI Whisper API.
Data Storage: Store the transcript in MongoDB and convert it into vector embeddings using Pinecone.
Query Answering: Use the OpenAI API to answer user queries based on the vector embeddings stored in Pinecone.
Setup and Installation
To set up this project locally, follow these steps:

1. Environment Variables
Create a .env file in both the server and my-app directories with the following variables:

MongoDB Connection String: MONGODB_URI
OpenAI API Key: OPENAI_API_KEY
Pinecone API Key: PINECONE_API_KEY
Pinecone Environment Key: PINECONE_ENVIRONMENT_KEY

2. Backend Setup
Navigate to the server directory:
cd server

Install dependencies:
npm install

Start the server:
npm start

The backend server will be running and listening for API requests.

3. Frontend Setup
Navigate to the my-app directory:

bash
Copy code
cd my-app
Install dependencies:

bash
Copy code
npm install
Start the React application:

bash
Copy code
npm start
The frontend application will be running and accessible at http://localhost:3000.

Usage
Video Upload and Transcription:

Use the frontend interface to input a video URL.
The backend will transcribe the video using the OpenAI Whisper API.

Data Storage:
The transcript is stored in MongoDB as text.
Vector embeddings of the transcript are stored in Pinecone.

Querying:
Enter queries related to the video content on the frontend.
The backend will use the stored vector embeddings to provide answers through the OpenAI API.

Contributing
Feel free to submit issues, feature requests, or pull requests. Contributions are welcome!



Contact
For any questions or support, please contact schaubey@iiitmanipur.ac.in

Thank you for checking out Lanchang Pinecone QnA! We hope this project demonstrates the powerful integration of AI technologies and provides a useful tool for extracting and querying information from video content.

