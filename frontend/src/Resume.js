import React, { useState } from 'react';
import $ from 'jquery';
import { useEffect } from 'react';
import "/node_modules/slick-carousel/slick/slick-theme.css";
import "/node_modules/slick-carousel/slick/slick.css";
import "./App.css"


const PersonalDetailsPage = () => {






  useEffect(() => {

    $('.skills-experience-container').hide();
    $('.education-container').hide();
    $('#nav2').hide();
    $('#nav3').hide();

  }, []);

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    middleName: '',
    state: '',
    city: '',
    country: '',
    address: '',
    dateOfBirth: '',
    maritalStatus: '',
    tenthSchool: '',
    tenthYear: '',
    tenthPercentage: '',
    twelfthSchool: '',
    twelfthYear: '',
    twelfthPercentage: '',
    degree: '',
    university: '',
    completionYear: '',
    major: '',
    gpa: '',
    selectedSkills: '',
    customSkill: '',
    yearsOfExperience: '',
    previousEmployer: '',
    jobTitle: '',
    // Add other field names here...
  });
  const handleClick = () => {


    if (!firstName || !lastName || !email || !phone || !state || !city || !country || !address || !dateOfBirth || !maritalStatus) {
      setErrors({
        firstName: !firstName ? 'First name is required.' : '',
        lastName: !lastName ? 'Last name is required.' : '',
        email: !email ? 'Email is required.' : '',
        phone: !phone ? 'Phone number is required.' : phone.length !== 10 ? 'Phone number should be 10 digits.' : '',
        state: !state ? 'State is required.' : '',
        city: !city ? 'City is required.' : '',
        country: !country ? 'Country is required.' : '',
        address: !address ? 'Address is required.' : '',
        dateOfBirth: !dateOfBirth ? 'Date of Birth is required.' : '',
        maritalStatus: !maritalStatus ? 'Marital Status is required.' : '',
      });
      return;
    }

    $(function () {
      $('.education-container').show();
      $('.personal-details-container').hide();
      $('.skills-experience-container').hide();
      $('#nav2').show();
      $('#nav1').hide();

      $('#nav3').hide();

      setErrors({});
    })

  }
  const handleClick2 = () => {




    $(function () {
      $('#nav1').show();
      $('#nav2').hide();
      $('#nav3').hide();

      $('.education-container').hide();
      $('.personal-details-container').show();
      $('.skills-experience-container').hide();


    })


  }
  const handleClick3 = () => {

    if (!tenthSchool || !tenthYear || !tenthPercentage || !twelfthSchool || !twelfthYear || !twelfthPercentage || !degree || !university || !completionYear || !major || !gpa) {
      setErrors({
        tenthSchool: !tenthSchool ? '10th School is required.' : '',
        tenthYear: !tenthYear ? 'Year of 10th completion is required.' : '',
        tenthPercentage: !tenthPercentage ? '10th Board Percentage is required.' : '',
        twelfthSchool: !twelfthSchool ? '12th School is required.' : '',
        twelfthYear: !twelfthYear ? 'Year of 12th completion is required.' : '',
        twelfthPercentage: !twelfthPercentage ? '12th Board Percentage is required.' : '',
        degree: !degree ? 'Degree is required.' : '',
        university: !university ? 'University is required.' : '',
        completionYear: !completionYear ? 'Year of completion is required.' : '',
        major: !major ? 'Major is required.' : '',
        gpa: !gpa ? 'GPA is required.' : '',
      });
      return;
    }
    $(function () {
      $('#nav3').show();
      $('#nav2').hide();
      $('#nav1').hide();
      $('.personal-details-container').hide();
      $('.education-container').hide();
      $('.skills-experience-container').show();
    })
    setErrors({});

  }
  const handleClick4 = () => {
    $(function () {
      $('#nav2').show();
      $('#nav1').hide();
      $('#nav3').hide();
      $('.personal-details-container').hide();
      $('.education-container').show();
      $('.skills-experience-container').hide();
    })
  }
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [address, setAddress] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [customSkill, setCustomSkill] = useState('');
  const [yearsOfExperience, setYearsOfExperience] = useState('');
  const [previousEmployer, setPreviousEmployer] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [tenthSchool, setTenthSchool] = useState('');
  const [tenthYear, setTenthYear] = useState('');
  const [tenthPercentage, setTenthPercentage] = useState('');
  const [twelfthSchool, setTwelfthSchool] = useState('');
  const [twelfthYear, setTwelfthYear] = useState('');
  const [twelfthPercentage, setTwelfthPercentage] = useState('');
  const [degree, setDegree] = useState('');
  const [university, setUniversity] = useState('');
  const [completionYear, setCompletionYear] = useState('');
  const [major, setMajor] = useState('');
  const [gpa, setGPA] = useState('');


  const handleSkillChange = (e) => {
    const selectedOptions = Array.from(e.target.options)
      .filter((option) => option.selected)
      .map((option) => option.value);
    setSelectedSkills(selectedOptions);
  };

  const handleCustomSkillChange = (e) => {
    setCustomSkill(e.target.value);
  };

  const addCustomSkill = (e) => {
    e.preventDefault();
    if (customSkill) {
      setSelectedSkills([...selectedSkills, customSkill]);
      setCustomSkill('');
    }
  };

  const removeSkill = (skill) => {
    setSelectedSkills(selectedSkills.filter((s) => s !== skill));
  };


  async function handleFormSubmit(e) {

    e.preventDefault();
    if (!selectedSkills || !jobTitle || !previousEmployer || !yearsOfExperience) {
      setErrors({
        selectedSkills: !selectedSkills ? 'Skills are required.' : '',
        jobTitle: !jobTitle ? 'Job Title is required.' : '',
        previousEmployer: !previousEmployer ? 'Previous Employer is required.' : '',
        yearsOfExperience: !yearsOfExperience ? 'Years of Experience is required.' : '',
      });
      return;
    }

    const data = {
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
    };
    await fetch("https://resume-6j37.vercel.app/api/auth/resume", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

      },

      body: JSON.stringify(data),
    })
      .catch(error => {
        window.alert("error from frontend side while sending data path not found", error);
        window.alert(error)
        return;
      });

    setErrors({});
    // setForm({ name: "", email: "", pass: "", repass: "" });
    setFirstName({ firstName: "", });
    setLastName({ lastName: "", });
    setEmail({ email: "", });
    setPhone({ phone: "", });
    setMiddleName({ middleName: "", });
    setCity({ city: "", });
    setState({ state: "", });

    setCountry({ country: "", });

    setAddress({ address: "", });
    setDateOfBirth({ dateOfBirth: "", });
    setMaritalStatus({ maritalStatus: "", });
    setSelectedSkills([]);
    setCustomSkill('');
    setYearsOfExperience('');
    setPreviousEmployer('');
    setJobTitle('');
    setTenthSchool({ tenthSchool: "", });
    setTenthPercentage({ tenthPercentage: "", });
    setTenthYear({ tenthYear: "", });
    setTwelfthSchool({ twelfthSchool: "", });
    setTwelfthPercentage({ twelfthPercentage: "", });
    setTwelfthYear({ twelfthYear: "", });
    setGPA({ gpa: "", });
    setDegree({ degree: "", });
    setMajor({ major: "", });
    setUniversity({ university: "", });
    setCompletionYear({ completionYear: "", });

  };


  return (
    <>
      <div id='gaurav'>

        <div className="personal-details-container">
          <h1 className="page-title">Personal Details</h1>
          <div >
            <div className='personal-detail'>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <span className="error-message">{errors.firstName}</span>
              </div>
              <div className="form-group">
                <label htmlFor="middleName">Middle Name</label>
                <input
                  type="text"
                  id="middleName"
                  value={middleName}
                  onChange={(e) => setMiddleName(e.target.value)}
                />
                <span className="error-message">{errors.middleName}</span>
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
                <span className="error-message">{errors.lastName}</span>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <span className="error-message">{errors.email}</span>
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <span className="error-message">{errors.phone}</span>
              </div>
              <div className="form-group">
                <label htmlFor="state">State</label>
                <input
                  type="text"
                  id="state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  required
                />
                <span className="error-message">{errors.state}</span>
              </div>
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
                <span className="error-message">{errors.city}</span>
              </div>
              <div className="form-group">
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  id="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                />
                <span className="error-message">{errors.country}</span>
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
                <span className="error-message">{errors.address}</span>
              </div>
              <div className="form-group">
                <label htmlFor="dateOfBirth">Date of Birth</label>
                <input
                  type="date"
                  id="dateOfBirth"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  required
                />
                <span className="error-message">{errors.dateOfBirth}</span>
              </div>
              <div className="form-group">
                <label htmlFor="maritalStatus">Marital Status</label>
                <select
                  id="maritalStatus"
                  value={maritalStatus}
                  onChange={(e) => setMaritalStatus(e.target.value)}
                  required
                >
                  <option value="">Select</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="divorced">Divorced</option>
                  <option value="widowed">Widowed</option>
                </select>
                <span className="error-message">{errors.maritalStatus}</span>
              </div>
            </div>
          </div>


        </div>
        <div className="education-container">
          <h1 className="page-title">Education Qualification</h1>
          <div className='education-div'>
            <div className="form-group">
              <label htmlFor="tenthSchool">10th School</label>
              <input
                type="text"
                id="tenthSchool"
                value={tenthSchool}
                onChange={(e) => setTenthSchool(e.target.value)}
                required
              />
              <span className="error-message">{errors.tenthSchool}</span>

            </div>
            <div className="form-group">
              <label htmlFor="tenthYear">10th Year of Completion</label>
              <input
                type="text"
                id="tenthYear"
                value={tenthYear}
                onChange={(e) => setTenthYear(e.target.value)}
                required
              />
              <span className="error-message">{errors.tenthYear}</span>

            </div>
            <div className="form-group">
              <label htmlFor="tenthPercentage">10th Board Percentage</label>
              <input
                type="text"
                id="tenthPercentage"
                value={tenthPercentage}
                onChange={(e) => setTenthPercentage(e.target.value)}
                required
              />
              <span className="error-message">{errors.tenthPercentage}</span>

            </div>
            <div className="form-group">
              <label htmlFor="twelfthSchool">12th School</label>
              <input
                type="text"
                id="twelfthSchool"
                value={twelfthSchool}
                onChange={(e) => setTwelfthSchool(e.target.value)}
                required
              />
              <span className="error-message">{errors.twelfthSchool}</span>

            </div>
            <div className="form-group">
              <label htmlFor="twelfthYear">12th Year of Completion</label>
              <input
                type="text"
                id="twelfthYear"
                value={twelfthYear}
                onChange={(e) => setTwelfthYear(e.target.value)}
                required
              />
              <span className="error-message">{errors.twelfthYear}</span>

            </div>
            <div className="form-group" >
              <label htmlFor="twelfthPercentage">12th Board Percentage</label>
              <input
                type="text"
                id="twelfthPercentage"
                value={twelfthPercentage}
                onChange={(e) => setTwelfthPercentage(e.target.value)}
                required
              />

              <span className="error-message">{errors.twelfthPercentage}</span>


            </div>

            <div className="form-group">
              <label htmlFor="degree">Degree</label>
              <input
                type="text"
                id="degree"
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="university">University</label>
              <input
                type="text"
                id="university"
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
                required
              />
              <span className="error-message">{errors.university}</span>

            </div>
            <div className="form-group">
              <label htmlFor="completionYear">Year of Completion</label>
              <input
                type="text"
                id="completionYear"
                value={completionYear}
                onChange={(e) => setCompletionYear(e.target.value)}
                required
              />
              <span className="error-message">{errors.completionYear}</span>

            </div>
            <div className="form-group">
              <label htmlFor="major">Major</label>
              <input
                type="text"
                id="major"
                value={major}
                onChange={(e) => setMajor(e.target.value)}
                required
              />
              <span className="error-message">{errors.major}</span>

            </div>
            <div className="form-group">
              <label htmlFor="gpa">GPA</label>
              <input
                type="text"
                id="gpa"
                value={gpa}
                onChange={(e) => setGPA(e.target.value)}
                required
              />
              <span className="error-message">{errors.gpa}</span>

            </div>
          </div>




        </div>
        <div className="skills-experience-container">
          <h1 className="page-title">Skills and Experience</h1>
          <div className="form-group">
            <label htmlFor="skills">Skills</label>
            <select
              id="skills"
              multiple
              value={selectedSkills}
              onChange={handleSkillChange}
            >
              {selectedSkills.map((skill) => (
                <option key={skill} value={skill}>
                  {skill}
                </option>
              ))}
            </select>
            <div className="custom-skill-input">
              <input
                type="text"
                value={customSkill}
                onChange={handleCustomSkillChange}
                placeholder="Add a custom skill"
              />
              <button onClick={addCustomSkill}>Add</button>
            </div>
            <div className="selected-skills">
              {selectedSkills.map((skill) => (
                <span key={skill} className="selected-skill">
                  {skill}
                  <button
                    className="remove-skill-button"
                    onClick={() => removeSkill(skill)}
                  >
                    Remove
                  </button>
                </span>
              ))}
            </div>
            {/* <div id='gc'>
            {
              selectedSkills.map((gc)=> (
                <span key={gc} className=''>

{gc}
<button onClick={()=>removeSkill(gc)}>
  DELETE
</button>



                </span>
              ))
            }
          </div> */}
          </div>
          <div className="form-group">
            <label htmlFor="yearsOfExperience">Years of Experience</label>
            <input
              type="number"
              id="yearsOfExperience"
              value={yearsOfExperience}
              onChange={(e) => setYearsOfExperience(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="previousEmployer">Previous Employer</label>
            <input
              type="text"
              id="previousEmployer"
              value={previousEmployer}
              onChange={(e) => setPreviousEmployer(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="jobTitle">Job Title</label>
            <input
              type="text"
              id="jobTitle"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
          </div>

        </div>
        <div className="navigation-buttons" id='nav1'>
          <button onClick={handleClick}>Next</button>
        </div>
        <div className="navigation-buttons" id='nav2'>
          <button onClick={handleClick2}>Previous</button>
          <button onClick={handleClick3}>Next</button>
        </div>
        <div className="navigation-buttons" id='nav3'>
          <button onClick={handleClick4}>Previous</button>
          <button onClick={handleFormSubmit}>Submit</button>
        </div>


      </div>

    </>
  );
};

export default PersonalDetailsPage;
