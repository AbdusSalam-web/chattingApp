import React from "react";
import UserProfile from "../components/userProfile/UserProfile";


const Home = () => {
  
  return (
    <>
      <h1
        className="w-full h-screen flex  items-center justify-center
      drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)]"
      >
        <UserProfile />
      </h1>
    </>
  );
};

export default Home;
