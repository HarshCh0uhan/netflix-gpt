import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayMovies from "../hooks/useNowPlayMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";
import { fetchRemoteConfig } from "../utils/firebase";
import { setupAI } from "../utils/openai";

const Browse = () => {
  const showGptSearch = useSelector((store) => store?.gpt?.showGptSearch);

  // Initialize configs and API instances
  useEffect(() => {
    const initApp = async () => {
      // Fetch Remote Config values
      await fetchRemoteConfig();
      
      // Initialize AI service
      await setupAI();
    };
    
    initApp();
  }, []);

  // Fetch movies
  useNowPlayMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <div className="bg-black">
          <MainContainer />
          <SecondaryContainer />
        </div>
      )}
    </div>
  );
};

export default Browse;