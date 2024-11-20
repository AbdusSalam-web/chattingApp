import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../components/navbar/Navbar";

const LayoutMain = () => {
  // ****** variable
  const navigate = useNavigate();
  // Redux data
  const userDataSlice = useSelector((state) => state.currentUser.value);
  useEffect(() => {
    if (userDataSlice === null) { // ****** ensuring to 
      navigate("/login");
     
    }
  }, []);

  
  return (
    <>
      <Navbar/>
      <Outlet />
    </>
  );
};

export default LayoutMain;
