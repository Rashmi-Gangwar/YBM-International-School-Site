const crypto = require('crypto');
const User = require('../models/user');
const sendEmail = require('../utils/sendEmail');
const bcrypt = require('bcryptjs');

// Generate and send verification token during registration (call this inside your registration controller)
async function sendVerificationEmail(user) {
  const verificationToken = crypto.randomBytes(32).toString("hex");
  user.verificationToken = verificationToken;
  await user.save();

  const verificationUrl = `http://localhost:3000/verify-email/${verificationToken}`;
  await sendEmail(
    user.email,
    "Verify your email",
    `<p>Click to verify your email: <a href="${verificationUrl}">${verificationUrl}</a></p>`
  );
}

// Email verification controller
exports.verifyEmail = async (req, res) => {
  try {
    const user = await User.findOne({ verificationToken: req.params.token });
    if (!user) return res.status(400).json({ message: "Invalid or expired token" });

    user.verified = true;
    user.verificationToken = undefined;
    await user.save();

    res.status(200).json({ message: "Email verified successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Middleware-like check for verified email (use inside login or protected routes)
function checkVerified(req, res, next) {
  if (req.user && !req.user.verified) {
    return res.status(401).json({ message: "Email not verified" });
  }
  next();
}

// Forgot password controller
exports.forgotPassword = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const resetToken = crypto.randomBytes(32).toString("hex");
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpire = Date.now() + 3600000; // 1 hour from now
    await user.save();

    const resetUrl = `http://localhost:3000/reset-password/${resetToken}`;
    await sendEmail(
      user.email,
      "Reset your password",
      `<p>Click to reset your password: <a href="${resetUrl}">${resetUrl}</a></p>`
    );

    res.json({ message: "Reset link sent" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Reset password controller
exports.resetPassword = async (req, res) => {
  try {
    const user = await User.findOne({
      resetPasswordToken: req.params.token,
      resetPasswordExpire: { $gt: Date.now() },
    });
    if (!user) return res.status(400).json({ message: "Invalid or expired token" });

    // Hash new password before saving
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();

    res.json({ message: "Password reset successful" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports.sendVerificationEmail = sendVerificationEmail;
module.exports.checkVerified = checkVerified;
