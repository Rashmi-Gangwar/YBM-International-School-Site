const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/user');
const { authMiddleware, adminMiddleware } = require("../middleware/authMiddleware");
const {
  getAllUsers,
  verifyEmail,
  forgotPassword,
  resetPassword,
} = require("../controllers/userController");

// @route   POST /api/users/register
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, phone, pincode, agreedToTerms } = req.body;

    if (!name || !email || !password || !phone || !pincode || !agreedToTerms) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword, phone, pincode, agreedToTerms });
    await user.save();

    res.status(201).json({ message: 'Registered successfully. Please verify your email.' });
  } catch (error) {
    console.error("Register Error:", error);
    res.status(500).json({ message: "Server error during registration" });
  }
});

// @route   POST /api/users/login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'User not found' });

    if (!user.verified) return res.status(403).json({ message: 'Please verify your email before login.' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: 'Incorrect password' });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.json({ token, user: { name: user.name, email: user.email, role: user.role } });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Server error during login" });
  }
});

// @route   GET /api/users/user
router.get('/user', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (error) {
    console.error("Get User Error:", error);
    res.status(500).json({ message: "Server error fetching user" });
  }
});

// @route   GET /api/users/admin
router.get('/admin', authMiddleware, adminMiddleware, getAllUsers);

// Email verification route
router.get('/verify-email/:token', verifyEmail);

// Forgot password route
router.post('/forgot-password', forgotPassword);

// Reset password route
router.post('/reset-password/:token', resetPassword);

router.put('/update-profile', authMiddleware, async (req, res) => {
  const { motherName, fatherName, dob, studentClass, rollNumber } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      { motherName, fatherName, dob, studentClass, rollNumber },
      { new: true }
    ).select("-password");

    res.json({ message: "Profile updated", user: updatedUser });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

router.delete('/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting user' });
  }
});

router.put('/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Error updating user' });
  }
});


module.exports = router;
