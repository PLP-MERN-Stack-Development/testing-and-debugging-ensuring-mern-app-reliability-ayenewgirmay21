# MERN Bug Tracker

A **Bug Tracker application** built with the MERN stack (MongoDB, Express, React, Node.js) that allows users to create, update, and track bugs in projects. This project also integrates **testing and debugging best practices** to ensure reliability.

---

## **Table of Contents**

- [Features](#features)  
- [Installation](#installation)  
- [Running the Project](#running-the-project)  
- [Testing](#testing)  
- [Debugging Techniques](#debugging-techniques)  
- [Testing Approach & Coverage](#testing-approach--coverage)  
- [Technologies](#technologies)  

---

## **Features**

- Create, read, update, and delete bugs  
- Track bug status (open, in-progress, resolved)  
- RESTful API with Express and MongoDB  
- Frontend built with React and React Router  
- Unit, integration, and component testing included  

---

## **Installation**

1. Clone the repository:

```bash
git clone https://github.com/PLP-MERN-Stack-Development/testing-and-debugging-ensuring-mern-app-reliability-ayenewgirmay21.git
cd testing-and-debugging-ensuring-mern-app-reliability-ayenewgirmay21
Install backend dependencies:

cd server
npm install


Install frontend dependencies:

cd ../client
npm install


Create a .env file in the server folder with:

PORT=5000
MONGO_URI=your_mongodb_connection_string

Running the Project
Backend
cd server
npm run dev


Server will run at http://localhost:5000.

Frontend
cd client
npm run dev


Frontend will run at http://localhost:5173 (or Vite default port).

Testing
Backend Testing (Node + Jest + Supertest)

Run tests:

cd server
npm test


Tests cover:

CRUD operations on bugs

API endpoints validation

Database connection and error handling

Frontend Testing (React Testing Library + Jest)

Run tests:

cd client
npm test


Tests cover:

Component rendering

User interactions

API integration mocks

Debugging Techniques Used

Console logging for tracing errors

Debugger statements in Node.js

React Developer Tools for frontend inspection

Network monitoring for API requests

Error boundary components in React for catching runtime errors

Testing Approach & Coverage

Unit Tests: Validate small pieces of logic individually (backend functions, React components).

Integration Tests: Test API routes and database interactions together.

Component Tests: Ensure React components render correctly and respond to user actions.

Coverage: Core backend endpoints and frontend components tested to ensure correct behavior, error handling, and edge case management.

Technologies

Backend: Node.js, Express, MongoDB, Mongoose

Frontend: React, React Router, React Testing Library, CSS

Testing: Jest, Supertest, React Testing Library

Tools: VS Code, Postman, Git, GitHub, Nodemon
