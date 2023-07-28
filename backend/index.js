// server.js
const express = require('express');
const cors = require('cors');
const authRoutes = require('./authRoutes');
const { auth } = require('firebase-admin');
const { admin, db } = require('./config.js');
const { sendEmail } = require('./emailsender');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors(
{
  origin: ['https://resume-green-beta-71.vercel.app'],
  methods: ["POST","GET"],
  credentials:true
}

));
app.use(express.json());

app.get("/",(req,res)=>{
  res.json("hello");
})
app.use('/api/auth', authRoutes);

// Function to send the email


module.exports = { sendEmail };



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
