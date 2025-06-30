// server/utils/sendReminders.js
const Capsule = require('../models/Capsule');
const User = require('../models/User');
const nodemailer = require('nodemailer');

const sendReminders = async () => {
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const capsules = await Capsule.find({
    reminderSent: false,
    unlockDate: { $lte: tomorrow, $gt: now }
  }).populate('user');

  for (let capsule of capsules) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,  // your email
        pass: process.env.EMAIL_PASS   // your app password
      }
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: capsule.user.email,
      subject: '⏳ Your Time Capsule is Unlocking Soon!',
      text: `Hi ${capsule.user.name}, your capsule "${capsule.title}" will unlock on ${capsule.unlockDate}.`
    });

    capsule.reminderSent = true;
    await capsule.save();
  }

  console.log(`✅ Reminders sent at ${new Date().toLocaleString()}`);
};

module.exports = sendReminders;
