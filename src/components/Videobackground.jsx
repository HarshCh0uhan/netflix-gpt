import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const Videobackground = ({ movieId }) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector((store) => store.movies?.trailerVideo)

  const getVideos = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );

    const data = await res.json();

    const trailers = data.results?.filter(
      (video) => video.type === "Trailer" || video.type === "Teaser"
    );

    const trailer = trailers.length ? trailers[0] : data.results[0];

    // console.log(trailer);

    dispatch(addTrailerVideo(trailer))
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div>
      <iframe
        className="absolute w-full h-full"
        src={"https://www.youtube.com/embed/mdfrG2cLK58?si=" + trailerVideo?.key}
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default Videobackground;
