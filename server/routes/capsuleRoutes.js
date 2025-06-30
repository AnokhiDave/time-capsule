// const express = require('express');
// const router = express.Router();
// const auth = require('../middleware/authMiddleware');
// const {
//   createCapsule,
//   getUserCapsules,
//   getCapsuleById
// } = require('../controllers/capsuleController');

// router.post('/', auth, createCapsule);
// router.get('/', auth, getUserCapsules);
// router.get('/:id', auth, getCapsuleById);

// module.exports = router;
const express = require('express');
const router = express.Router();

const auth = require('../middleware/authMiddleware'); // ✅ Make sure this exports a function

const {
  createCapsule,
  getUserCapsules,
  getCapsuleById
} = require('../controllers/capsuleController');

router.post('/', auth, createCapsule);
router.get('/', auth, getUserCapsules);
router.get('/:id', auth, getCapsuleById);

module.exports = router;
