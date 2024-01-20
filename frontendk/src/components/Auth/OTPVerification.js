// OTPVerification.js
import React, { useState } from 'react';
import axios from 'axios';

const OTPVerification = () => {
  const [otp, setOtp] = useState('');

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleVerification = async () => {
    try {
      const response = await axios.post('localhost:4000/verify-otp', { userID: 'userId', otp });
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div>
      <h2>OTP Verification</h2>
      <input type="text" name="otp" placeholder="Enter OTP" onChange={handleOtpChange} />
      <button onClick={handleVerification}>Verify</button>
    </div>
  );
};

export default OTPVerification;
