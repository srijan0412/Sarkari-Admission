import "./Login.css";
import { TempLogo } from "../../../../Assets";
import { useEffect, useRef,useState } from "react";

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

const LoginFormBox = ({handleSignin}) => {
  const [ShowPassword, setShowPassword] = useState(false);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  function handleFormSubmit() {
    // API Call
    handleSignin();
  }

  return (
    <div className="LoginFormBox">
      <h3 className="BoxHeading">Welcome Back!</h3>
      <p className="BoxDesc">Sign in to continue</p>
      <form onSubmit={handleFormSubmit} className="InputForm">
        <ul>
          <li className="FormInputElement">
            <input
              type="email"
              value={Email}
              onChange={handleEmailChange}
              required
            />
            <label>Email</label>
          </li>
          <li className="FormInputElement">
            <input
              type={`${ShowPassword ? "text" : "password"}`}
              value={Password}
              onChange={handlePasswordChange}
              required
            />
            <label>Password</label>
            <ion-icon
              name={`${ShowPassword ? "eye-off-outline" : "eye-outline"}`}
              className="ShowPassword"
              onClick={() => {
                setShowPassword(!ShowPassword);
              }}
            ></ion-icon>
          </li>
        </ul>
        <div className="ForgotPasswordContainer">
          <a href="/">ForgotPassword?</a>
        </div>
        <button type="submit" className="ActionBtn">
          Login
        </button>
      </form>
    </div>
  );
};

const OtpInput = ({ length, onOtpSubmit }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [])


  const handleChange = (index, event) => {
    const value = event.target.value;
    if(isNaN(value)) return;
    const newOtp = [...otp];
    
    // Allow only one input
    newOtp[index] = value.substring(value.length-1);
    setOtp(newOtp);

    // submit trigger
    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) onOtpSubmit(combinedOtp);

    //Move to next input if current field id filled
    if (value && index<length-1 && inputRefs.current[index+1]){
      inputRefs.current[index+1].focus();
    } 
  }
  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1,1)
  }
  const handleKeyDown = (index, e) => {
    if(e.key==="Backspace" && !otp[index] && index>0 && inputRefs.current[index-1]) {
      inputRefs.current[index-1].focus();
    }
  }
  return (
    <div className="OtpInputField">
      {otp.map((value, index) => {
        return (
          <input
            key={index}
            ref={(input)=>(inputRefs.current[index] = input)}
            type="text"
            value={value}
            onChange={(e) => handleChange(index, e)}
            onClick={() => handleClick(index)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="OtpInput"
          />
        );
      })}
    </div>
  );
};

const RegisterFormBox = ({handleRegister}) => {
  const [ShowPassword, setShowPassword] = useState(false);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Validations
    // Password Validation
    if (Password.length < 8) {
      alert("Length of the password should be greater than 8 characters");
      return;
    }

    // APIcall

    // Show OTP Field
    setShowOtpInput(true);
  };
  const onOtpSubmit = (otp) => {
    
    // Otp verification Api request
    console.log("Login Successful",otp);
    handleRegister();
  };

  return (
    <div className="RegisterFormBox">
      {!showOtpInput ? (
        <>
          <h3 className="BoxHeading">Welcome, Create your account</h3>
          <form onSubmit={handleFormSubmit} className="InputForm">
            <ul>
              <li className="FormInputElement">
                <input
                  type="text"
                  value={Name}
                  onChange={handleNameChange}
                  required
                />
                <label htmlFor="" className="Inputlabel">
                  Name
                </label>
              </li>
              <li className="FormInputElement">
                <input
                  type="email"
                  value={Email}
                  onChange={handleEmailChange}
                  required
                />
                <label htmlFor="" className="Inputlabel">
                  Email
                </label>
              </li>
              <li className="FormInputElement">
                <input
                  type={`${ShowPassword ? "text" : "password"}`}
                  value={Password}
                  onChange={handlePasswordChange}
                  required
                />
                <label htmlFor="" className="Inputlabel">
                  Password
                </label>
                <ion-icon
                  name={`${ShowPassword ? "eye-off-outline" : "eye-outline"}`}
                  className="ShowPassword"
                  onClick={() => {
                    setShowPassword(!ShowPassword);
                  }}
                ></ion-icon>
              </li>
            </ul>
            <button type="submit" className="ActionBtn">
              Sign Up
            </button>
          </form>
        </>
      ) : (
        <div>
          <h3 className="BoxHeading">
            Enter OTP sent to "<span className="BoxHeadingSpan">{Email}</span>"
          </h3>
          <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
        </div>
      )}
    </div>
  );
};

const Login = ({ handlecloseclick }) => {
  const [ShowLogin, setShowLogin] = useState(true);
  const handleRegister = () => {
    console.log("Record stored successfully.")
    handlecloseclick();
  }
  const handleSignin = () => {
    console.log("Successfully Logged In");
    handlecloseclick();
  }
  return (
    <div className="LoginScreen">
      <div className="LoginBox">
        <div className="LeftLoginBox">
          <h3>Guaranteed Admissions</h3>
          <p>
            Avail the chance of getting guaranteed admission to the best college
            for you. Register now and take a step towards your bright future.
          </p>
        </div>
        <div className="RightLoginBox">
          <ion-icon name="close-outline" onClick={handlecloseclick}></ion-icon>
          <img src={TempLogo} alt="Logo" className="Templogo" />
          {ShowLogin ? <LoginFormBox handleSignin={handleSignin}/> : <RegisterFormBox handleRegister={handleRegister}/>}
          {ShowLogin ? (
            <p className="SwitchForLR">
              New to CollegeDekho?{" "}
              <span
                onClick={() => {
                  setShowLogin(false);
                }}
              >
                Signup
              </span>
            </p>
          ) : (
            <p className="SwitchForLR">
              Already have an account?{" "}
              <span
                onClick={() => {
                  setShowLogin(true);
                }}
              >
                Signin
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
