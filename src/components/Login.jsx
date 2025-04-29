import React, { useRef, useState, useEffect } from "react";
import Header from "./Header";
import { BG_URL, PHOTO_URL } from "../utils/constants";
import checkValidData from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import Footer from "./Footer";

const Login = () => {
  const [isSignInForn, setIsSignInForn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const dispatch = useDispatch();

  const handleSignIn = () => {
    // Validate inputs
    // if (name != null) {
    //   console.log(name.current);
    // }
    // console.log(email.current.value);
    // console.log(password.current.value);

    const message = checkValidData(
      email.current.value,
      password.current.value,
      name.current
    );

    if (message) {
      setErrorMessage(message);
      return;
    }

    if (!isSignInForn) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          
          const displayName = name.current ? name.current.value : "User";
          
          // Update profile with name and photo URL
          updateProfile(user, {
            displayName: displayName,
            photoURL: PHOTO_URL
          })
            .then(() => {
                const { uid, email, displayName, photoURL } = auth.currentUser;
                
                dispatch(
                  addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL,
                  })
                );
                
                setSuccessMessage("Sign Up was Successful!");
            })
            .catch((updateError) => {
              console.error("Error updating profile:", updateError);
              setErrorMessage("Error updating user profile. Please try again.");
            });
        })
        .catch((error) => {
          console.log(error.code + " - " + error.message);
          let friendlyMessage = "";
          switch (error.code) {
            case "auth/email-already-in-use":
              friendlyMessage = "Email is already in use.";
              break;
            case "auth/invalid-email":
              friendlyMessage = "Invalid email address.";
              break;
            case "auth/user-not-found":
              friendlyMessage = "No account found with this email.";
              break;
            case "auth/wrong-password":
              friendlyMessage = "Incorrect password.";
              break;
            default:
              friendlyMessage = "Something went wrong. Please try again.";
          }
          setErrorMessage(friendlyMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          setSuccessMessage("Sign In was Successful!");
        })
        .catch((error) => {
          let friendlyMessage = "";
          switch (error.code) {
            case "auth/email-already-in-use":
              friendlyMessage = "Email is already in use.";
              break;
            case "auth/invalid-email":
              friendlyMessage = "Invalid email address.";
              break;
            case "auth/user-not-found":
              friendlyMessage = "No account found with this email.";
              break;
            case "auth/wrong-password":
              friendlyMessage = "Incorrect password.";
              break;
            default:
              friendlyMessage = "Something went wrong. Please try again.";
          }
          setErrorMessage(friendlyMessage);
        });
    }
  };

  useEffect(() => {
    if (successMessage || errorMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
        setErrorMessage("");
      }, 3000); // 3 seconds
      return () => clearTimeout(timer);
    }
  }, [successMessage, errorMessage]);

  const toggleSignInForm = () => {
    setIsSignInForn(!isSignInForn);
  };

  return (
    <>
      <div className="px-4 sm:px-8 md:px-16 lg:px-40 pt-2 min-h-[98vh]">
        {/* Main content with relative positioning */}
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src={BG_URL}
              alt="Background"
              className="w-full h-full flex object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          {/* Header */}
          <div className="absolute z-10 w-full">
            <Header />
          </div>
          {/* Form container */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full max-w-md sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/3">
              <div className="absolute inset-0 bg-black opacity-70 rounded-lg"></div>
              <form
                className="p-12 sm:p-8 md:p-12 text-white relative z-10 flex flex-col gap-y-5 sm:gap-y-5"
                onSubmit={(e) => e.preventDefault()}
              >
                <h1 className="font-bold text-2xl sm:text-3xl py-2 sm:py-4">
                  {isSignInForn ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignInForn && (
                  <input
                    ref={name}
                    type="text"
                    placeholder="Username"
                    className="w-full p-3 border border-neutral-500 rounded-md"
                  />
                )}
                <input
                  ref={email}
                  type="text"
                  placeholder="Email or mobile number"
                  className="w-full p-3 border border-neutral-500 rounded-md"
                />
                <input
                  ref={password}
                  type="password"
                  placeholder="Password"
                  className="w-full p-3 border border-neutral-500 rounded-md"
                />
                {successMessage && (
                  <div role="alert" className="alert alert-success">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 shrink-0 stroke-current"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{successMessage}</span>
                  </div>
                )}

                {errorMessage && (
                  <div role="alert" className="alert alert-warning">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 shrink-0 stroke-current"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    <span>Warning: {errorMessage}</span>
                  </div>
                )}

                <button
                  className="w-full bg-red-600 p-3 rounded-md font-bold text-sm sm:text-base"
                  onClick={handleSignIn}
                >
                  {isSignInForn ? "Sign In" : "Sign Up"}
                </button>
                <p className="mt-4 text-sm sm:text-base text-neutral-400">
                  {isSignInForn ? "New to Netflix? " : "Already Registered. "}
                  <a
                    href="#"
                    className="text-white hover:underline font-bold"
                    onClick={toggleSignInForm}
                  >
                    {isSignInForn ? "Sign up now" : "Sign in now"}
                  </a>
                </p>

                <p className="text-xs text-neutral-400 mt-2">
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot.
                  <a href="#" className="text-blue-500 underline">
                    {" "}
                    Learn more
                  </a>
                </p>
              </form>
            </div>
          </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;