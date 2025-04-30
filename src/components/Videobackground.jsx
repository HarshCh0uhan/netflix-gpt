import React from "react";
import { useSelector } from "react-redux";
import useGetMovieTrailer from "../hooks/useGetMovieTrailer";

const Videobackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useGetMovieTrailer(movieId);

  return (
    <div>
      <iframe
        className="absolute w-full h-full"
        src={
          "https://www.youtube.com/embed/mdfrG2cLK58?si=" + trailerVideo?.key
        }
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default Videobackground;
