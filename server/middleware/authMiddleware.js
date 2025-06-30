// const jwt = require('jsonwebtoken');

// const auth = (req, res, next) => {
//   const token = req.headers.authorization;

//   if (!token)
//     return res.status(401).json({ message: 'No token provided. Unauthorized.' });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded.id;
//     next();
//   } catch (err) {
//     return res.status(401).json({ message: 'Invalid token' });
//   }
// };

// module.exports = auth;
// ✅ File: server/middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.id;
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid token' });
  }
};

module.exports = auth;
