----------------------------
##Description
This project is a microservice designed to handle problem management, specifically for adding problems to the system. It is part of a larger clone of the LeetCode backend. The service is built using Node.js, Express, and MongoDB.

To set up the project locally, follow these steps:

Clone the repository:

git clone <repository-url>
Navigate to the project directory:

cd <project-directory>
Install the dependencies:

npm install
Set up environment variables:
Create a .env file in the root of the project and add the following variables:

PORT=3005
ATLAS_DB_URL="<your-mongoDb-url>"
NODE_ENV="development"

Run the project:

npm run dev

## How routing is working in the project

 - /api/v1/problems/ping
    - because the route starts with /api
        /api      -> /v1      -> /problems     -> /ping
        apiRouter -> v1Router -> problemRouter -> problemController -> service layer

