import React, { useState } from 'react';

function RegistrationForm() {
  const [currentTab, setCurrentTab] = useState(1);
  const [image, setImage] = useState(null);
  const [personalDetails, setPersonalDetails] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleNextStep1 = () => {
    setCurrentTab(2);
  };

  const handlePersonalDetailsChange = (event) => {
    setPersonalDetails({ ...personalDetails, [event.target.name]: event.target.value });
  };

  const handleNextStep2 = () => {
    setCurrentTab(3);
  };

  const handleConfirmation = () => {
    alert('Successfully registered!');
  };

  return (
    <div>
      {currentTab === 1 && (
        <div>
          <h2>Step 1: Upload Image</h2>
          <input type="file" onChange={handleImageChange} />
          <button onClick={handleNextStep1}>Next</button>   
        </div>
      )}
      {currentTab === 2 && (
        <div>
          <h2>Step 2: Personal Details</h2>
          <form>
            <label>
              Name:
              <input type="text" name="name" value={personalDetails.name} onChange={handlePersonalDetailsChange} />
            </label>
            <br />
            <label>
              Email:
              <input type="email" name="email" value={personalDetails.email} onChange={handlePersonalDetailsChange} />
            </label>
            <br />
            <label>
              Phone:
              <input type="tel" name="phone" value={personalDetails.phone} onChange={handlePersonalDetailsChange} />
            </label>
            <br />
            <button onClick={handleNextStep2}>Next</button>
          </form>
        </div>
      )}
      {currentTab === 3 && (
        <div>
          <h2>Success!</h2>
          <p>Name: {personalDetails.name}</p>
          <p>Email: {personalDetails.email}</p>
          <p>Phone: {personalDetails.phone}</p>
          <button onClick={handleConfirmation}>Confirm</button>
        </div>
      )}
    </div>
  );
}

export default RegistrationForm;