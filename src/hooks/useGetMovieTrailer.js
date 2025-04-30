import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";

const useGetMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieTrailer = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );

    const data = await res.json();

    const trailers = data.results?.filter(
      (video) => video.type === "Trailer" || video.type === "Teaser"
    );

    const trailer = trailers.length ? trailers[0] : data.results[0];

    console.log(trailer);

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);
};

export default useGetMovieTrailer;
