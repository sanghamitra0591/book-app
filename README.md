# Book Management API

This repository contains a Node.js Express.js project for managing a collection of books with role-based authentication and authorization. The project includes CRUD operations for books, user authentication with JWT tokens, and robust validation and error handling.

## LIVE SERVER LINK : https://book-app-idm3.onrender.com

## Table of Contents
- [Setup](#setup)
- [Features](#features)
  - [Authentication and Authorization](#authentication-and-authorization)
  - [Validation](#validation)
  - [Schema](#schema)
  - [Middleware](#middleware)
  - [Error Handling](#error-handling)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Dependencies](#dependencies)

## Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/book-management-api.git
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following variables:
   ```sh
   port=3000
   mongo_url=your_mongodb_connection_string
   key=your_jwt_secret
   ```

4. **Run the application:**
   ```sh
   npm start
   ```

## Features

### Authentication and Authorization

- Role-based authentication using JWT tokens.
- User roles: Admin, Author, Reader.
- Admin has access to all CRUD operations for books.
- Author can create, update, and view books.
- Reader can only view and read books.
- Middleware to verify JWT tokens and enforce role-based permissions for each route.

### Validation

- Validation for "Book" entity fields using `express-validator`.
- Ensure required fields such as title and author are validated.
- Handle validation errors gracefully and return appropriate error messages and status codes.

### Schema

- MongoDB schema for "Book" entity:
  - Fields: title, author, coverPage, year.
- User schema for handling roles and authentication.
- File upload for the book's cover page using free storage services.

### Middleware

- Middleware to log incoming requests, including method, URL, and timestamp.
- Apply logging middleware to all routes.

### Error Handling

- Error handling middleware to catch errors during request processing.
- Return meaningful error messages and appropriate status codes in response to errors.

## User

1. **Register New User:**
   ```http
   POST /user/register
   Content-Type: multipart/form-data
   Body: { "name": "User Name", "email": "User Email", "role": "Admin / Author / Reader", "password": "Password" }
   ```

2. **Login User:**
   ```http
   GET /user/login
   Body: { "email": "User Email", "password": "Password" }
   ```

## Usage

1. **Create a new book (Admin/Author):**
   ```http
   POST /book/add
   Authorization: Bearer <token>
   Content-Type: multipart/form-data
   Body: { "title": "Book Title", "author": "Author Name", "coverPage": "Image URL", "year": 2021 }
   ```

2. **Get all books (Admin/Author/Reader):**
   ```http
   GET /book
   Authorization: Bearer <token>
   ```

3. **Update a book (Admin/Author):**
   ```http
   PUT /book/:id
   Authorization: Bearer <token>
   Content-Type: application/json
   Body: { "title": "Updated Title", "author": "Updated Author", "year": 2022 }
   ```

4. **Delete a book (Admin):**
   ```http
   DELETE /book/:id
   Authorization: Bearer <token>
   ```
5. **Get book detail (Admin/Author/Reader):**
   ```http
   GET /book/:id
   Authorization: Bearer <token>
   ```

## Environment Variables

- `PORT`: The port on which the server listens (default: 3000).
- `MONGODB_URI`: Connection string for the MongoDB database.
- `JWT_SECRET`: Secret key for signing JWT tokens.

## Dependencies

- express
- mongoose
- jsonwebtoken
- express-validator
- jsonwebtoken
- dotenv
- cors
- bcrypt
- nodemon

## License

This project is licensed under the MIT License.