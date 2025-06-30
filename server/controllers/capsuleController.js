// const Capsule = require('../models/Capsule');

// exports.createCapsule = async (req, res) => {
//   const { title, message, unlockDate } = req.body;

//   try {
//     const capsule = await Capsule.create({
//       user: req.user.id,
//       title,
//       message,
//       unlockDate,
//     });
//     res.status(201).json(capsule);
//   } catch (err) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// exports.getUserCapsules = async (req, res) => {
//   try {
//     const capsules = await Capsule.find({ user: req.user.id }).sort({ unlockDate: 1 });
//     res.json(capsules);
//   } catch (err) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// exports.getCapsuleById = async (req, res) => {
//   try {
//     const capsule = await Capsule.findById(req.params.id);
//     if (!capsule) return res.status(404).json({ message: 'Not found' });

//     if (capsule.user.toString() !== req.user.id)
//       return res.status(403).json({ message: 'Unauthorized' });

//     res.json(capsule);
//   } catch (err) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };
const Capsule = require('../models/Capsule');

// Create a capsule
exports.createCapsule = async (req, res) => {
  const { title, message, unlockDate } = req.body;
  try {
    const capsule = await Capsule.create({
      user: req.user,
      title,
      message,
      unlockDate,
    });
    res.status(201).json(capsule);
  } catch (err) {
    console.error('❌ Capsule creation failed:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all capsules for the logged-in user
exports.getUserCapsules = async (req, res) => {
  try {
    const capsules = await Capsule.find({ user: req.user });
    res.json(capsules);
  } catch (err) {
    console.error('❌ Fetch failed:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get single capsule by ID
exports.getCapsuleById = async (req, res) => {
  try {
    const capsule = await Capsule.findOne({ _id: req.params.id, user: req.user });
    if (!capsule) {
      return res.status(404).json({ message: 'Capsule not found' });
    }
    res.json(capsule);
  } catch (err) {
    console.error('❌ Get capsule failed:', err);
    res.status(500).json({ message: 'Server error' });
  }
};
