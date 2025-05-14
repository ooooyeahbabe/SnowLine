require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('./config/db');
const authRoutes = require('./routes/auth');
const announcementRoutes = require('./routes/announcements');
const tentRoutes = require('./routes/tents');
const bookingRoutes = require('./routes/bookings');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/login', authRoutes);
app.use('/api/announcements', announcementRoutes);
app.use('/api/tents', tentRoutes);
app.use('/api/bookings', bookingRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
