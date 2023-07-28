const nodemailer = require('nodemailer');
const { admin, db } = require('./config.js');

const firestore = admin.firestore();
const usersCollection = firestore.collection('users');

const transporter = nodemailer.createTransport({
    service: 'YourEmailService',
    auth: {
      user: 'info.mrgc07@gmail.com',
      pass: '7096173068',
    },
  });

  async function sendEmail(user) {
    // Compose the email content
    const emailContent = `
      <h1>Hello ${user.Name},</h1>
      <p>Your details:</p>
      <p>Email: ${user.Email}</p>
    
      <!-- Add other user details as needed -->
    `;
  
    // Email options
    const mailOptions = {
      from: 'info.mrgc07@gmail.com', 
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
  
  async function sendUserDataByEmail(userId) {
    try {
      // Fetch user data from Firestore
      const userSnapshot = await usersCollection.doc(userId).get();
      if (userSnapshot.exists) {
        const userData = userSnapshot.data();
        await sendEmail(userData);
      } else {
        console.log('User not found.');
      }
    } catch (error) {
      console.error('Error fetching user data: ', error);
    }
  }
  
  const userId = '3WAp46WL26MWKua4iNgIMBqxJDJ2'; // Replace with the user ID you want to send the email to
sendUserDataByEmail(userId);