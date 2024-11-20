import React, { useState } from "react";
import "./ResetPassword.css";
import { Link } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { Slide, toast } from "react-toastify";
const ResetPassword = () => {
  // ****** usestate variable
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [spinner, setSpinner] = useState("");

  // ****** firebase variable
  const auth = getAuth();

  // ****** function part
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setEmailError("Email can't be blank");
      toast.error("Enter your email", {
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
    } else {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          toast.info(`Password reset link sent to this email: ${email} `, {
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
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          
        });
    }
  };

  return (
    <>
      <div className="resetForm">
        <div className="main_form">
          <form action="" onSubmit={handleSubmit}>
            <div>
              <div className="input-container">
                <input
                  className={emailError && "placeholder:text-red-500"}
                  type="email"
                  placeholder={emailError ? emailError : "Email Address"}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  onClick={() => setEmailError("")}
                />
              </div>
            </div>
            {spinner ? (
              <button className="spinner ">
                <ClipLoader color="#ffffff" height={15} />
              </button>
            ) : (
              <button className="submit" type="submit">
                Reset password
              </button>
            )}
          </form>
          <div className="logIn">
            <Link to={"/login"}>
              Remember password?
              <span> Log in</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
