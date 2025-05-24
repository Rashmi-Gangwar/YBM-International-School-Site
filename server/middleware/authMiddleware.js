const jwt = require('jsonwebtoken');
const User = require('../models/user');

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password");

    if (!req.user) {
      return res.status(401).json({ message: "User not found" });
    }

    next();
  } catch (err) {
    console.error("Auth Middleware Error:", err.message);
    return res.status(401).json({ message: "Invalid token" });
  }
};

const adminMiddleware = (req, res, next) => {
  if (req.user?.role === "admin") {
    next();
  } else {
    return res.status(403).json({ message: "Access denied: Admins only" });
  }
};

module.exports = { authMiddleware, adminMiddleware };
