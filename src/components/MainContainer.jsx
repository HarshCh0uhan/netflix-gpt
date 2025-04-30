import React from "react";
import VideoTitle from "./VideoTitle";
import Videobackground from "./Videobackground";
import { useSelector } from "react-redux";
import SecondaryContainer from "./SecondaryContainer";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayMovies);

  if (!movies) return (
    <div className="h-screen flex justify-center items-center bg-black">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
    </div>
  );

  const mainMovie = movies[0];
  // console.log(mainMovie);

  return (
    <div className="pt-[30%] bg-black md:pt-0 h-1/2">
      <VideoTitle
        title={mainMovie?.original_title}
        overview={mainMovie?.overview}
      />
      <Videobackground movieId={mainMovie?.id} />
    </div>
  );
};

export default MainContainer;
