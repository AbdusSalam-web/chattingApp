import React, { useState } from "react";
import "../common/LoginRegister.css";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaFacebook, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import "react-toastify/dist/ReactToastify.css";
import { Flip, Slide, toast } from "react-toastify";
const Register = () => {
  // usestate part
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  //  ==== firebase variable part
  const auth = getAuth();

  // functions
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setNameError("Enter your name!");
    }
    if (!email) {
      setEmailError("Email can't be blank");
    }
    if (!password) {
      setPasswordError("Password can't be blank");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          sendEmailVerification(auth.currentUser).then(() => {
            console.log("Email verification sent!");
            toast.success("🦄 Email verification sent!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Slide,
            });
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode === "auth/email-already-in-use") {
            toast.error("🦄 Email already taken!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Flip,
            });
          }
        });
    }
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
            <form action="" onSubmit={handleSubmit}>
              <div>
                <div className="input-container">
                  <input
                    type="text"
                    required=""
                    placeholder="Full name"
                    onChange={(e) => {
                      setName(e.target.value), setNameError("");
                    }}
                  />
                  <div className="min-h-[24px]">
                    {nameError && (
                      <p className="text-red-500 text-right mr-[50px]">
                        {nameError}
                      </p>
                    )}
                  </div>
                </div>
                <div className="input-container">
                  <input
                    type="text"
                    required=""
                    placeholder="Email Address"
                    onChange={(e) => {
                      setEmail(e.target.value), setEmailError("");
                    }}
                  />
                  <div className="min-h-[24px]">
                    {emailError && (
                      <p className="text-red-500 text-right mr-[50px]">
                        {emailError}
                      </p>
                    )}
                  </div>
                </div>
                <div className="input-container ">
                  <input
                    onChange={(e) => {
                      setPassword(e.target.value), setPasswordError("");
                    }}
                    type={showPassword ? "text" : "password"}
                    required=""
                    placeholder="Password"
                  />
                  <div>
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
                  </div>
                  <div className="min-h-[24px]">
                    {passwordError && (
                      <p className="text-red-500 text-right mr-[50px]">
                        {passwordError}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <button className="submit" type="submit">
                Create Account
              </button>
            </form>
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
