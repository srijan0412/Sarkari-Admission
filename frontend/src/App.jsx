import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Global.css";
import { Footers, Navbar, Home, College, Loader, NotFound } from "./Components/export";

import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { loadUser } from './redux/actions/user';


const App = () => {



  const { isAuthenticated, user, message, error, loading } = useSelector(
    state => state.user
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);


  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>
        {loading ? (
        <Loader />
      ) : (
        <>
        <Navbar />
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/college" element={<College/>} />
          </Routes>
        <Footers />
        <Toaster />

        </>
      )}
    </Router>
  );
};

export default App;
