// UserRegistration.js
import React, { useState } from 'react';
import axios from 'axios';

const UserRegistration = () => {
  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegistration = async () => {
    try {
      const response = await axios.post('localhost:4000/register', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div>
      <h2>User Registration</h2>
      <input type="text" name="userName" placeholder="Username" onChange={handleInputChange} />
      <input type="email" name="userEmail" placeholder="Email" onChange={handleInputChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleInputChange} />
      <button onClick={handleRegistration}>Register</button>
    </div>
  );
};

export default UserRegistration;
