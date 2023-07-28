const { admin, db , getUserData} = require('./config.js');
const { sendEmail } = require('./emailsender.js');

exports.resume = async(req,res) =>{
  const{firstName,
    lastName,
    email,
    phone,
    middleName,
    state,
    city,
    country,
    address,
    dateOfBirth,
    maritalStatus,
    tenthSchool,
    tenthYear,
    tenthPercentage,
    twelfthSchool,
    twelfthYear,
    twelfthPercentage,
    degree,
    university,
    completionYear,
    major,
    gpa,
    selectedSkills,
customSkill,
yearsOfExperience,
previousEmployer,
jobTitle} = req.body;

try {
  const newResumeRef = db.collection('resume').doc();
await newResumeRef.set({
    firstName,
    lastName,
    email,
    phone,
    middleName,
    state,
    city,
    country,
    address,
    dateOfBirth,
    maritalStatus,
    tenthSchool,
    tenthYear,
    tenthPercentage,
    twelfthSchool,
    twelfthYear,
    twelfthPercentage,
    degree,
    university,
    completionYear,
    major,
    gpa,
    selectedSkills,
customSkill,
yearsOfExperience,
previousEmployer,
jobTitle
  });
  
  await sendEmail({
    firstName,
    lastName,
    email,
    phone,
    middleName,
    state,
    city,
    country,
    address,
    dateOfBirth,
    maritalStatus,
    tenthSchool,
    tenthYear,
    tenthPercentage,
    twelfthSchool,
    twelfthYear,
    twelfthPercentage,
    degree,
    university,
    completionYear,
    major,
    gpa,
    selectedSkills,
customSkill,
yearsOfExperience,
previousEmployer,
jobTitle
    // Pass any other relevant fields you want to include in the email here
  });
  res.status(201).json({ message: 'successs' });



} catch (error) {
  res.status(500).json({ error: 'Failed ' });
  
  res.json({

    message:"hello gaurav"
})
  console.log(error)
}
}

exports.registerUser = async (req, res) => {
  const {Name, Email, Password } = req.body;

  try {
    const userRecord = await admin.auth().createUser({
       
      Email,
      Password,
    });
    await db.collection('users').doc(userRecord.uid).set({
        Email,
       Name,
      });


    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to register user.' });
    console.log(error)
  }
};

exports.sendMail = async ( req, res)=>{
  const userId = req.params.userId;
  
  try {
    // Fetch user data from your Firestore collection or any other data source
    const userData = await getUserData(userId);
    
    // Send the data to the user's email
    await sendEmail(userData);
    
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending data to email: ', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
}
