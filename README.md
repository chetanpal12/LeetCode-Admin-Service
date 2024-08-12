
```markdown
# LeetCode Backend Clone - Problem Management Microservice

## Description
This project is a microservice designed to handle problem management, specifically for adding problems to the system. It is part of a larger clone of the LeetCode backend. The service is built using Node.js, Express, and MongoDB.

## Table of Contents
- [Routing Overview](#routing-overview)
- [Steps to Clone the Project](#steps-to-clone-the-project)

## Routing Overview
The routing in this microservice is structured as follows:

- **/api/v1/problems/ping**
  - The route is structured hierarchically:
    - `/api` -> `apiRouter`
    - `/v1` -> `v1Router`
    - `/problems` -> `problemRouter`
    - `/ping` -> `problemController -> service layer`

This hierarchical structure ensures that routing is modular and scalable, facilitating the management of problem-related operations.


## Steps to Clone the Project
Follow these steps to clone and set up the project on your local machine:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the project directory:**
   ```bash
   cd <project-directory>
   ```

3. **Install the dependencies:**
   ```bash
   npm install
   ```

4. **Create a `.env` file and add the following configuration:**
   ```env
   PORT=3005
   ATLAS_DB_URL="<your-mongoDb-url>"
   NODE_ENV="development"
   ```

5. **Run the project:**
   ```bash
   npm run dev
   ```


Now the microservice should be running on `http://localhost:3005`, ready to handle problem management tasks.
```
