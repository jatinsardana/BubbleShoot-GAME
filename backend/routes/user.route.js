import express from "express";
import User from "../models/user.model.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username: username, password: password });
    if (user) {
      res.status(200).json({ message: "Login successful" });
    } else {
      res.status(400).json({ error: "Invalid username or password" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    } else {
      const newUser = new User({
        email: email,
        username: username,
        password: password,
      });
      await newUser.save();
      res.status(201).json({ message: "User created successfully" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
