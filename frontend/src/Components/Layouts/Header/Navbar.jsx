import React, { useState } from "react";
import { SarkariAdmissionLogo } from "../../../Assets";
import "./Navbar.css";

const data = [
  {
    id: 1,
    title: "College",
  },
  {
    id: 2,
    title: "Exam",
  },
  {
    id: 3,
    title: "Courses",
  },
  {
    id: 4,
    title: "Career",
  },
  {
    id: 5,
    title: "Study Abroad",
  },
  {
    id: 6,
    title: "Latest Updates",
  },
  {
    id: 7,
    title: "More",
  },
];

const Navbar = () => {
  const [HeaderTopToggler, setHeaderTopToggler] = useState(true);
  const [ShowLogin, setShowLogin] = useState(false);
  return (
    <header>
      <div className={`${HeaderTopToggler ? "HeaderTop" : "invisible"}`}>
        <p>Download the app to find best colleges for you.</p>
        <a href="/">Download Now</a>
        <button
          onClick={() => {
            setHeaderTopToggler(false);
          }}
        >
          <ion-icon name="close-outline"></ion-icon>
        </button>
      </div>
      <div className="HeaderMid">
        <div className="HeaderMidLeft">
          <a href="/">
            <ion-icon name="call-outline"></ion-icon>
            <p>1800-572-9877</p>
          </a>
          <a href="/">
            <ion-icon name="send-outline"></ion-icon>
            <p>hello@collegedekho.com</p>
          </a>
        </div>
        <div className="HeaderMidRight">
          <p>We’re on your favourite socials!</p>
          <div className="socials">
            <ion-icon name="logo-facebook"></ion-icon>
            <ion-icon name="logo-instagram"></ion-icon>
            <ion-icon name="logo-linkedin"></ion-icon>
            <ion-icon name="logo-youtube"></ion-icon>
            <ion-icon name="logo-twitter"></ion-icon>
          </div>
        </div>
      </div>
      <div className="HeaderLow">
        <div className="BrandLogoArea">
          <img
            src={SarkariAdmissionLogo}
            className="Logo"
            alt="SarkariAdmission"
          />
        </div>
        <div className="NavLinkArea">
          <ul className="Navlinks">
            {data.map((obj) => (
              <li className="Navlink" key={obj.id}>
                <div className="LinkTitle">
                  <p>{obj.title}</p>
                  <ion-icon name="chevron-down-outline"></ion-icon>
                </div>
                <div>{/* Currently Empty but will be filled later */}</div>
              </li>
            ))}
          </ul>
          <ul className="ExtraLinksArea">
            <li className="Extralink">
              <ion-icon name="person-circle-outline"></ion-icon>
              <div className="LoginDialogBox">
                <div className="LoginButtonContainer">
                  <button>Login to your account</button>
                </div>
                <div className="RegisterButtonContainer">
                  <h3>By creating an account you can -</h3>
                  <ul>
                    <li>
                      <ion-icon name="checkmark-outline"></ion-icon>
                      Apply to colleges directly
                    </li>
                    <li>
                      <ion-icon name="checkmark-outline"></ion-icon>
                      Shortlist colleges for quick access
                    </li>
                    <li>
                      <ion-icon name="checkmark-outline"></ion-icon>
                      Get free counselling
                    </li>
                  </ul>
                  <button>Create an account</button>
                </div>
              </div>
            </li>
            <li className="Extralink">
              <ion-icon name="search-outline" onClick={()=>{}}></ion-icon>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
