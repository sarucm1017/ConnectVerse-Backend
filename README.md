# Connectverse

## Overview

Connectverse is a Node.js backend project that provides authentication APIs using JWT (JSON Web Token) for secure user login and registration. 

## Technologies Used

### Connectverse (Backend)
- Node.js: JavaScript runtime environment.
- Express.js: Web application framework for Node.js.
- MongoDB: NoSQL database for storing user data.
- Mongoose: ODM for MongoDB.
- JWT: For secure authentication.
- Bcrypt: For hashing passwords.

## Prerequisites

- Node.js (v14 or later)
- MongoDB (local or cloud instance)
- NPM or Yarn package manager

## Getting Started

### Backend (Connectverse)

1. Clone the Repository:

        git clone https://github.com/sarucm1017/Connectverse-Backend.git
    cd connectverse
    

2. Install Dependencies:

        npm install
    

3. Set Up Environment Variables:

    Create a .env file in the root directory and add the following:

        MONGO_URI=your_mongodb_connection_string_
        JWT_SECRET=your_jwt_secret
    

4. Start the Server:

        npm run dev
    

    The backend server will run on http://localhost:4001.


## Usage

### API Endpoints (Backend)

- POST /api/auth/signup: Register a new user.
- POST /api/auth/login: Authenticate a user and return a JWT token.

### Environment Variables

Make sure to replace placeholders in the .env file with actual values.

## Project Structure

### Connectverse (Backend)
- server.js: Entry point of the application.
- config/: Configuration files.
- models/: Mongoose models for MongoDB.
- routes/: API routes.
- controllers/: Logic for handling requests.
- middleware/: Custom middleware functions.

## Contributing

Feel free to fork the repository and submit pull requests. Contributions are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please contact [98sarucm@gmail.com].