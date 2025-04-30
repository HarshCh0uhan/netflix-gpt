import React from "react";
import { useSelector } from "react-redux";
import useGetMovieTrailer from "../hooks/useGetMovieTrailer";

const Videobackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useGetMovieTrailer(movieId);

  if (!trailerVideo) return null;

  return (
    <div className="relative w-full h-[58vh] sm:h-[70vh] md:h-[79vh] lg:h-screen overflow-hidden">
      <div className="absolute bottom-1/12 lg:top-0 md:top-0 lg:left-0 md:left-0 w-full h-full">
        <iframe
          className="w-full h-full object-cover scale-[3] md:scale-[2.7] lg:scale-[1.3]"
          src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&showinfo=0&loop=1&playlist=${trailerVideo?.key}`}
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Videobackground;
