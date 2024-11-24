import React from "react";
import { FaEye, FaFacebook, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast, Slide } from "react-toastify";
import { ClipLoader } from "react-spinners";
import { useDispatch } from "react-redux";
import { userData } from "../../features/counter/userSlice";
import { getDatabase, ref, set } from "firebase/database";

const Login = () => {
  // *********** useState for storing the default data
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailLabel, setEmailLabel] = useState("Email Address");
  const [passwordLabel, setPasswordLabel] = useState("Your password");
  const [mailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [spinner, setSpinner] = useState(false);
  // ********** firbase variable
  const auth = getAuth();
  const db = getDatabase();
  // *******  Redux variable

  const dispatch = useDispatch();
  // ********* function part start
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "") {
      console.log("Enter your email.");
      setEmailError("Enter your email.");
    }
    if (password === "") {
      console.log("Enter your password.");
      setPasswordError("Enter your password.");
    } else {
      setSpinner(true);
      signInWithEmailAndPassword(auth, email, password) // login promise
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("🚀 ~ .then ~ user:", user);
          if (user.emailVerified === false) {
            toast.error("Email isn't verified!", {
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
            setSpinner(false);
          } else {
            toast.success("Login successful", {
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
            navigate("/");
            // ****** set data to local storage
            localStorage.setItem("user", JSON.stringify(user));
            // ======== set data to Redux
            dispatch(userData(user));

            console.log(user);
            set(ref(db, "users/" + userCredential.user.uid), {
              userName: userCredential.user.displayName,
              userPhotoURL: userCredential.user.photoURL,
            });
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error("Something went wrong!", {
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
          setSpinner(false);
        });
    }
  };
  const handleInput = () => {
    if (email === "") {
      setEmailLabel("Email Address");
    }
    if (password === "") {
      setPasswordLabel("Your password");
    }
  };

  return (
    <>
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
              <h2>Login to Account</h2>
              <div className="other_account">
                <button className="google_account">
                  <FcGoogle />
                  <p>Login with google</p>
                </button>
                <button className="facebook_account">
                  <FaFacebook />
                  <p>Login with Facebook</p>
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
                      type="email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setEmailLabel("");
                        setEmailError("");
                      }}
                      onBlur={handleInput}
                      onClick={() => setEmailError("")}
                    />
                    <label className="label">{emailLabel}</label>
                    <div className="min-h-[24px]">
                      {mailError && (
                        <p className="text-red-500 text-right mr-[50px]">
                          {mailError}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="input-container ">
                    <input
                      type={showPassword ? "text" : "password"}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setPasswordLabel("");
                        setPasswordError("");
                      }}
                      onBlur={handleInput}
                      onClick={() => setPasswordError("")}
                    />
                    <label className="label">
                      <div>{passwordLabel}</div>
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
                    </label>
                    <div className="min-h-[24px]">
                      {passwordError && (
                        <p className="text-red-500 text-right mr-[50px]">
                          {passwordError}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                {spinner ? (
                  <button className="spinner ">
                    <ClipLoader color="#ffffff" height={15} />
                  </button>
                ) : (
                  <button className="submit" type="submit">
                    Log In
                  </button>
                )}
                <p className="forgotPassword">
                  Forgot password? <Link to={"/resetpassword"}>Reset</Link>
                </p>
              </form>
              <div className="logIn">
                <p>
                  Don't have an account?
                  <span onClick={() => navigate("/register")}> Register</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Login;
