import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggetions from "./GptMovieSuggetions";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  // console.log(process.env.OPENAI_KEY + " " + process.env.AUTHORIZATION_KEY);

  return (
    <div>
      <div className="fixed -z-10 w-full h-full">
        <img
          src={BG_URL}
          alt="Background"
          className="w-full h-screen object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <GptSearchBar />
      <GptMovieSuggetions />
    </div>
  );
};

export default GptSearch;
