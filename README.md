# Book Management API
This repository contains a Node.js Express.js application for managing books with role-based authentication, JWT tokens, MongoDB integration, validation using express-validator, file uploads, middleware for request logging, error handling, and API documentation using Swagger.

LIVE SERVER LINK : https://book-app-idm3.onrender.com

Features

Authentication and Authorization: Role-based authentication and permission-based authorization using JWT tokens.
Validation: Validation for the "Book" entity fields using express-validator.
Schema: MongoDB schemas for users and books, including file upload functionality for book cover pages.
Middleware: Request logging middleware to log incoming requests, and error handling middleware.
Documentation: API documentation using Swagger.
Setup

Prerequisites
Node.js and npm (Node Package Manager)
MongoDB
Postman (for testing APIs)
Installation
Clone the repository:

bash
Copy code
git clone <repository_url>
cd book-management-api
Install dependencies:

bash
Copy code
npm install
Set up environment variables:

Create a .env file in the root directory and define the following variables:

plaintext
Copy code
PORT=3000
MONGODB_URI=<your_mongodb_uri>
JWT_SECRET=<your_jwt_secret>
Running the Server
Start the Express server:

bash
Copy code
npm start
The server will run on http://localhost:3000.

Usage

Authentication
Admin: Full CRUD operations on books.
Author: Create, update, and view books.
Reader: View and read books.
API Documentation
Access the Swagger documentation at http://localhost:3000/api-docs after starting the server.

File Structure

bash
Copy code
book-management-api/
├── controllers/
│   ├── authController.js
│   ├── bookController.js
│   └── userController.js
├── middleware/
│   ├── authentication.js
│   ├── authorization.js
│   ├── errorHandling.js
│   └── requestLogging.js
├── models/
│   ├── bookModel.js
│   └── userModel.js
├── routes/
│   ├── authRoutes.js
│   └── bookRoutes.js
├── .env
├── .gitignore
├── package.json
├── server.js
└── README.md
Testing

Use Postman or any API testing tool to test the endpoints:

Register and login users.
Use JWT tokens to access authorized routes for CRUD operations on books.
Submission

Organize your code neatly, document thoroughly, and adhere to best practices throughout the implementation. Provide a link to your repository or the Live Server Link with a Postman Collection. Include any additional notes or explanations that you believe are relevant. If possible, please submit a video recording demonstrating the whole task.

Author

Sanghamitra Satpathy

