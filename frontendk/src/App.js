// App.js
import React from 'react';
import UserRegistration from './components/Auth/UserRegistration'
import OTPVerification from './components/Auth/OTPVerification';

const App = () => {
  return (
    <div>
      <UserRegistration />
      <OTPVerification />
    </div>
  );
};

export default App;
