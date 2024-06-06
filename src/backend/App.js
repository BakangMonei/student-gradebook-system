const express = require('express');
const dotenv = require('dotenv');
const studentRoutes = require('./routes/studentRoutes');
const gradeRoutes = require('./routes/gradeRoutes');
const authRoutes = require('./routes/authRoutes');
const { errorHandler } = require('./middlewares/errorHandler');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/students', studentRoutes);
app.use('/api/grades', gradeRoutes);
app.use('/api/auth', authRoutes);

app.use(errorHandler);

module.exports = app;
