const userModel = require("../model/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const userSignup = asyncHandler( async (req, res) => {
    const { userName, email, password, name } = req.body;
  
    try {
      //checking if the user already exists
      const userExists = await userModel.findOne({ $or: [{ userName }, { email }] });
      if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      // Creating a new user with the hashed password
      const createUser = await userModel.create({
        userName,
        email,
        password: hashedPassword,
        name,
      });
  
      // Generating a JWT token
      const token = jwt.sign({ id: createUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
      // Send the response with the token and user details
      res.status(201).json({
        token,
        user: {
          id: createUser._id,
          userName: createUser.userName,
          email: createUser.email,
        },
      });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  }
);


const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide both email and password' });
    }
  
    try {
      // Find the user by email
      const user = await userModel.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      // Compare the provided password with the stored hashed password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      // Generate JWT token
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
      // Send response with token and user info
      res.status(200).json({
        token,
        user: {
          id: user._id,
          userName: user.userName,
          email: user.email
        }
      });
    } catch (error) {
      console.error('Error in loginUser:', error); // Log the actual error
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  });
  
  module.exports = { userSignup , loginUser };