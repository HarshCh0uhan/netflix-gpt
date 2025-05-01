import React from "react";
import Header from "./Header";
import useNowPlayMovies from "../hooks/useNowPlayMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
  useNowPlayMovies();

  const showGptSearch = useSelector((store) => store?.gpt?.showGptSearch);

  // console.log(showGptSearch);

  return (
    <div className="bg-black">
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
