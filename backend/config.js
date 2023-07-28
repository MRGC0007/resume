const admin = require('firebase-admin');

const serviceAccount = require('./serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mrgc-a2fb7.firebaseio.com" 
});


const db = admin.firestore();


async function getUserData(userId) {
  try {
    const userSnapshot = await db.collection('users').doc(userId).get();
    if (userSnapshot.exists) {
      return userSnapshot.data();
    } else {
      throw new Error('User not found.');
    }
  } catch (error) {
    throw error;
  }
}
module.exports = { admin, db , getUserData};
