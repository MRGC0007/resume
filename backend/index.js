// server.js
const express = require('express');
const cors = require('cors');
const authRoutes = require('./authRoutes');
const { auth } = require('firebase-admin');
const { admin, db } = require('./config.js');
const { sendEmail } = require('./emailsender');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors(

  {
    origin: 'https://resume-6j37.vercel.app/',
  }
));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "hello gaurav"
  });
});

app.get("/gaurav", (req, res) => {
  res.json({
    message: "hello gaurav patel"
  });
});

app.use('/api/auth', authRoutes);

// Function to send the email


module.exports = { sendEmail };



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
