import React from "react";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const Browse = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      console.log(error.code + " - " + error.message);
    })
  };

  return (
    <div className="flex justify-between">
      <div>
        <Header />
      </div>
      <button
        className="w-24 bg-red-600 p-2 rounded-md font-bold text-sm sm:text-base cursor-pointer m-4"
        onClick={handleSignOut}
      >
        Sign Out
      </button>
    </div>
  );
};

export default Browse;
