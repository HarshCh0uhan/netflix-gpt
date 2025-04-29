import React from "react";
import Header from "./Header";
import useNowPlayMovies from "../hooks/useNowPlayMovies";

const Browse = () => {
  useNowPlayMovies();

  return <Header />;
};

export default Browse;
