// emailSender.js
const nodemailer = require('nodemailer');

// Function to send the email
async function sendEmail(user) {
  // Replace with your email service configurations
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
   port: 465,
   secure: true,
    auth: {
      user: 'info.mrgc07@gmail.com',
      pass: 'vqjrudtzydtnrhco',
    },
  });

  // Compose the email content
  const emailContent = `
    <h1 style="color: #007BFF;">Hello ${user.firstName},</h1>
    <p>Your details:</p>
    <p>fullName: ${user.firstName} + ${user.lastName}  </p>
    <p>Email: ${user.email}</p>
    <p>phone number: ${user.phone}</p>
    <p>Address: ${user.address}</p>
    <p>DOB: ${user.dateOfBirth}</p>


    <!-- Add other user details as needed -->
  `;

  // Email options
  const mailOptions = {
    from: 'info.mrgc07@gmail.com', // Replace with your email address
    to: user.email,
    subject: 'Your User Details',
    html: emailContent,
  };

  try {
    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ', info.response);
  } catch (error) {
    console.error('Error sending email: ', error);
  }
}

module.exports = { sendEmail };
