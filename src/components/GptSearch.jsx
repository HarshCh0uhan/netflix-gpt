import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggetions from "./GptMovieSuggetions";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  // console.log(process.env.OPENAI_KEY + " " + process.env.AUTHORIZATION_KEY);

  return (
    <div>
      <div className="absolute inset-0 -z-10">
        <img
          src={BG_URL}
          alt="Background"
          className="w-full h-full flex object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <GptSearchBar />
      <GptMovieSuggetions />
    </div>
  );
};

export default GptSearch;
