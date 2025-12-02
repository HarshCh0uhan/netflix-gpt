import React, { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { toggleGptSearch } from "../utils/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // console.log(auth);

  const handleGptSearch = () => {
    dispatch(toggleGptSearch());
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error.code + " - " + error.message);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <div className="absolute w-full px-4 sm:px-6 md:px-8 py-2 bg-gradient-to-b from-black z-20">
      <div className="flex flex-row justify-between items-center">
        {/* Logo */}
        <img className="w-24 sm:w-32 md:w-40" src={LOGO_URL} alt="logo" />

        {/* Desktop Menu */}
        {user && (
          <div className="hidden md:flex p-2 items-center gap-3">
            <button
              className="bg-indigo-500 cursor-pointer hover:bg-indigo-400 font-bold px-2 py-1 md:px-3 md:py-2 text-sm rounded-md transition-colors"
              onClick={handleGptSearch}
            >
              GPT Search
            </button>
            <div className="hidden lg:flex flex-col items-center text-sm font-bold">
              <img
                className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-md object-cover"
                alt="usericon"
                src={user?.photoURL}
              />
              {user?.displayName}
            </div>
            <button
              onClick={handleSignOut}
              className="font-bold bg-red-600 hover:bg-red-500 px-2 py-1 md:px-3 md:py-2 text-sm rounded-md transition-colors cursor-pointer"
            >
              Sign Out
            </button>
          </div>
        )}

        {/* Mobile Menu Button */}
        {user && (
          <div className="md:hidden flex items-center gap-2">
            <button
              className="bg-indigo-500 cursor-pointer hover:bg-indigo-400 font-bold px-2 py-1 md:px-3 md:py-2 text-sm rounded-md transition-colors"
              onClick={handleGptSearch}
            >
              GPT Search
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        )}
      </div>

      {/* Mobile Menu Dropdown */}
      {user && mobileMenuOpen && (
        <div className="md:hidden mt-2 bg-black bg-opacity-90 rounded-md p-4 flex flex-col items-center gap-3 animate-fadeIn">
          <img
            className="w-16 h-16 rounded-full object-cover"
            alt="usericon"
            src={user?.photoURL}
          />
          <div className="text-sm text-center">
            {user?.displayName || user?.email}
          </div>
          <button
            onClick={handleSignOut}
            className="w-full font-bold bg-red-600 hover:bg-red-700 p-2 rounded-md transition-colors"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
