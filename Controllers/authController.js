const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authController = {
  register: async (req, res) => {
    try {
      const { name, email, password } = req.body;

      // Validate input
      if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }

      // Check if the user already exists
      const existingUser = await User.findOne({ email }); // Renamed to `existingUser`
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user
      const newUser = new User({ name, email, password: hashedPassword });

      // Save the user to the database
      await newUser.save();

      // Return success response
      return res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  login: async (req, res) => {
    try {
      // Get user input
      const { email, password } = req.body;
      // Validate user input
      if (!email || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }
      // Check if the user exists
      const existingUser = await User.findOne({ email });
      if (!existingUser) {
        return res.status(401).json({ message: "User does not exists" });
      }
      // Check if the password is correct
      const ispasswordCorrect = await bcrypt.compare(
        password,
        existingUser.password
      );
      if (!ispasswordCorrect) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      // Create a token
      const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET);

      // Send the token the cookie
      res.cookie("token", token, {
        httpOnly: true,
      });
      // Return success response
      return res.status(200).json({ message: "User logged in successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  logout: async (req, res) => {
    try {
      // Clear the cookie
      res.clearCookie("token");
      // Return success response
      return res.status(200).json({ message: "User logged out successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  me: async (req, res) => {
    try {
      // Get the user id from the request
      const { userId } = req;
      // Find the user
      const user = await User.findById(userId).select("-password -__v");
      // Return the user
      return res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = authController;
