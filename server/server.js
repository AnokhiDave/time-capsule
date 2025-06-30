const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB(); // ✅ connect to MongoDB

const authRoutes = require('./routes/authRoutes');
const capsuleRoutes = require('./routes/capsuleRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/capsules', capsuleRoutes);

app.get('/', (req, res) => res.send('API is running...'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

const sendReminders = require('./utils/sendReminders');
const cron = require('node-cron');

// Every day at 9 AM
cron.schedule('0 9 * * *', async () => {
  await sendReminders();
});