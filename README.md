NodeJS File System API

This project is a NodeJS application with two API endpoints for managing text files in a specific folder:

Create a Text File

Generates a text file with the current timestamp as content.

The filename follows the format YYYY-MM-DD_HH-mm-ss.txt.

Retrieve All Text Files

Lists all text files in the specified folder.


- Getting Started
-  Prerequisites
-   Node.js (v14 or higher)
-  NPM (comes with Node.js)
-  Postman (for API testing)
Installation
Clone the repository:

       git clone https://github.com/username/nodejs-filesystem

Install dependencies:

    npm install
Run the server:

    node server.js
The application will run at http: //localhost:3000.

API Endpoints
Create a Text File
   
URL: /create-file

Method: POST

Description: Creates a text file with the current timestamp as content.

Response Example:

    json

    {

     "message": "File created successfully",
  
      "filename": "2024-12-03_14-22-30.txt"
  
     }

Retrieve All Text Files
   
URL: /list-files

Method: GET

Description: Retrieves all text files in the designated folder.

Response Example:

json


    {
  
     "files": [
  
    "2024-12-03_14-22-30.txt",
    "2024-12-02_16-15-45.txt"
    
    ]
  
    }

Development Details

Technologies Used

 - Node.js: For building the backend server.
 - Express.js: Framework for API handling.
 - fs: Node.js file system module for file operations.

Deployment Instructions

Push the project to GitHub:

    git add .
    git commit -m "Initial commit"
    git push origin main
    Use the format https://github.com/username/nodejs-filesystem for the repository URL.

Deploy the server on Render:

Create a new service, link it to your GitHub repository, and deploy the application.

Add the following details to a text file:

 - Render URL: https://nodejs-filesystem-irh2.onrender.com

![image](https://github.com/user-attachments/assets/be0df2b2-899f-44cd-9c5f-bd6466eb6ab5)

![image](https://github.com/user-attachments/assets/de65e5a8-5329-4716-818f-57e6a89917e5)





 
 
