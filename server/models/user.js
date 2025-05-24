const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true },
  phone: { type: String, required: true, trim: true },
  pincode: { type: String, required: true, trim: true },
  motherName: String,
  fatherName: String,
  dob: String,
  studentClass: String,
  rollNumber: String,
  agreedToTerms: { type: Boolean, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  verified: { type: Boolean, default: false },
  verificationToken: String,
  resetPasswordToken: String,
  resetPasswordExpire: Date,
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
