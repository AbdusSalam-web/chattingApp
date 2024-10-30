import React, { useState } from "react";
import "../common/LoginRegister.css";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaFacebook, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="account">
        <div className="account_text">
          <h1>Find 3D Objects, Mockups and Illustrations here.</h1>
          <div className="account_image">
            <img src="images/registerbg.png" alt="3D image" />
          </div>
        </div>
        <div className="account_form">
          <div className="text">
            <h2>Create Account</h2>
            <div className="other_account">
              <button className="google_account">
                <FcGoogle />
                <p>Sign up with google</p>
              </button>
              <button className="facebook_account">
                <FaFacebook />
                <p>Sign up with Facebook</p>
              </button>
            </div>
            <div className="font-poppins font-medium text-[36px] text-[#A6A6A6]">
              - OR -
            </div>
          </div>
          <div className="main_form">
            <form action="">
              <div>
                <div className="input-container">
                  <input type="text" id="input" required="" />
                  <label for="input" className="label">
                    Full name
                  </label>
                  <div className="underline"></div>
                </div>
                <div className="input-container">
                  <input type="text" id="input" required="" />
                  <label for="input" className="label">
                    Email Address
                  </label>
                  <div className="underline"></div>
                </div>
                <div className="input-container ">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="input"
                    required=""
                  />
                  <label for="input" className="label">
                    Password
                    {showPassword ? (
                      <FaEye
                        onClick={handleShowPassword}
                        className="absolute right-[20px] top-[30%] text-[20px]"
                      />
                    ) : (
                      <FaRegEyeSlash
                        onClick={handleShowPassword}
                        className="absolute right-[20px] top-[30%] text-[20px]"
                      />
                    )}
                  </label>
                  <div className="underline"></div>
                </div>
              </div>
            </form>
            <button className="submit">Create Account</button>
            <div className="logIn">
              <p>
                Already have an account?
                <span onClick={() => navigate("/login")}> Login</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
