import React from "react";
import VideoTitle from "./VideoTitle";
import Videobackground from "./Videobackground";
import { useSelector } from "react-redux";
import SecondaryContainer from "./SecondaryContainer";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayMovies);

  if (!movies) return;

  const mainMovie = movies[0];
  //   console.log(mainMovie);

  return (
    <div className="relative">
      <div className="relative h-[80vh]">
        <Videobackground />
        <div className="flex flex-col justify-center">
          <VideoTitle
            title={mainMovie?.original_title}
            overview={mainMovie?.overview}
          />
        </div>
      <SecondaryContainer />
      </div>
    </div>
  );
};

export default MainContainer;
