import React from "react";
import { useSelector } from "react-redux";
import useGetMovieTrailer from "../hooks/useGetMovieTrailer";

const Videobackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useGetMovieTrailer(movieId);

  return (
    <div className="relative w-full overflow-hidden pt-[56.25%]"> {/* 16:9 aspect ratio */}
      <iframe
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&loop=1&playlist=${trailerVideo?.key}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Videobackground;
