import React from "react";
import "./Global.css";
import { Footers, Navbar, Home, College } from "./Components/export";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/college" element={<College/>} />
          </Routes>
        <Footers />
      </>
    </Router>
  );
};

export default App;
