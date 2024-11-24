import React from "react";
import "./Navbar.css";
import { FaUserAlt  } from "react-icons/fa";
import { LuUserPlus2 } from "react-icons/lu";
import { BsPeopleFill } from "react-icons/bs";
import { FaUserLargeSlash } from "react-icons/fa6";
import { RiMessage2Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { IoLogOut } from "react-icons/io5";
import { useSelector } from "react-redux";

const Navbar = () => {
  // ****** getting Redux data
  const userDataSlice = useSelector((state) => state.currentUser.value);
  const navigate = useNavigate();
  // ****** function part

  const handleLogout = () => {
    navigate("/login"); // Navigate to the login page after log out

    //    removing the localstorage date with removeItem
    localStorage.removeItem("user");
  };

  return (
    <>
      <nav className="navbar">
        <div className="flexible">
          
          <Link to={"/alluser"}>   { /* all user*/ }
            <FaUserAlt />
          </Link>
          {/* Friend request  */}
          <Link  to={"/friendReq"}>
            <LuUserPlus2 />
          </Link>
          <Link >
            <BsPeopleFill />
          </Link>
          <Link >
            <div className="user">
              <img
                src={userDataSlice?.photoURL || "User Name"}
                alt={userDataSlice?.displaName}
              />
            </div>
          </Link>
          <Link >
            <FaUserLargeSlash />
          </Link>
          <Link >
            <RiMessage2Fill />
          </Link>
          <Link  onClick={handleLogout}>
            <IoLogOut />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
