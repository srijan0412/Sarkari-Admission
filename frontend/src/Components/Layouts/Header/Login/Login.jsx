import "./Login.css";
import { TempLogo } from "../../../../Assets";
import { useRef, useState } from "react";

// Static Data about the platform
const data = [
  {
    title: "Guaranteed Admissions",
    desc: "Avail the chance of getting guaranteed admission to the best college for you. Register now and take a step towards your bright future.",
  },
  {
    title: "Counselling",
    desc: "Sign up to get free counselling by CollegeDekho experts and find the best career path for yourself.",
  },
  {
    title: "Education Library",
    desc: "Get detailed information about Colleges, Careers, Courses, and Exams at CollegeDekho. Register now and make informed decisions about your career.",
  },
];

const LoginFormBox = () => {
  const [ShowPassword, setShowPassword] = useState(false);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  
  function handleEmailChange(event){
    setEmail(event.target.value);
  }

  function handlePasswordChange(event){
    setPassword(event.target.value);
  }

  function handleFormSubmit() {
    // API Call 
  }

  return (
    <div className="LoginFormBox">
      <h3 className="BoxHeading">Welcome Back!</h3>
      <p className="BoxDesc">Sign in to continue</p>
      <form onSubmit={handleFormSubmit} className="InputForm">
        <ul>
          <li className="FormInputElement">
            <input type="email" value={Email} onChange={handleEmailChange} required/>
            <label>Email</label>
          </li>
          <li className="FormInputElement">
            <input type={`${ShowPassword ? "text" : "password"}`} value={Password} onChange={handlePasswordChange} required/>
            <label>Password</label>
            <ion-icon name={`${ShowPassword ? "eye-off-outline":"eye-outline"}`} className="ShowPassword" onClick={()=>{setShowPassword(!ShowPassword)}}></ion-icon>
          </li>
        </ul>
        <div className="ForgotPasswordContainer">
          <a href="/">ForgotPassword?</a>
        </div>
        <button type="submit" className="ActionBtn">Login</button>
      </form>
    </div>
  );
}

const RegisterFormBox = () => {
  const [ShowPassword, setShowPassword] = useState(false);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Password, setPassword] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handlePhoneNumberChange(event) {
    setPhoneNumber(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  function handleFormSubmit() {
    // Validations
    // APIcall

  }
  return (
    <div className="RegisterFormBox">
      <h3 className="BoxHeading">Welcome, Create your account</h3>
      <form onSubmit={() => {}} className="InputForm">
        <ul>
          <li className="FormInputElement">
            <input type="text" value={Name} onChange={handleNameChange} required/>
            <label htmlFor="" className="Inputlabel">Name</label>
          </li>
          <li className="FormInputElement">
            <input type="email" value={Email} onChange={handleEmailChange} required/>
            <label htmlFor="" className="Inputlabel">Email</label>
          </li>
          <li className="FormInputElement">
            <input type="text" value={PhoneNumber} onChange={handlePhoneNumberChange} required/>
            <label htmlFor="" className="Inputlabel">Mobile Number</label>
          </li>
          <li className="FormInputElement">
            <input type={`${ShowPassword ? "text" : "password"}`} value={Password} onChange={handlePasswordChange} required/>
            <label htmlFor="" className="Inputlabel">Password</label>
            <ion-icon name={`${ShowPassword ? "eye-off-outline":"eye-outline"}`} className="ShowPassword" onClick={()=>{setShowPassword(!ShowPassword)}}></ion-icon>
          </li>
        </ul>
        <button type="submit" className="ActionBtn">Sign Up</button>
      </form>
    </div>
  );
}

const Login = () => {
  const [ShowLogin, setShowLogin] = useState(true);

  return (
    <div className="LoginScreen">
      <div className="LoginBox">
        <div className="LeftLoginBox">
          <h3>Guaranteed Admissions</h3>
          <p>Avail the chance of getting guaranteed admission to the best college for you. Register now and take a step towards your bright future.</p>
        </div>
        <div className="RightLoginBox">
          <ion-icon name="close-outline"></ion-icon>
          <img src={TempLogo} alt="Logo" className="Templogo"/>
          {ShowLogin ? <LoginFormBox/> : <RegisterFormBox />}
          {ShowLogin ?
            <p className="SwitchForLR">New to CollegeDekho? <span onClick={()=>{setShowLogin(false)}}>Signup</span></p> :
            <p className="SwitchForLR">Already have an account? <span onClick={()=>{setShowLogin(true)}}>Signin</span></p>
          }
        </div>
      </div>
    </div>
  );
};

export default Login;
