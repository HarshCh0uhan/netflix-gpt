import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";

const useGetMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const movieTrailer = useSelector((store) => store.movies?.trailerVideo);

  const getMovieTrailer = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );

    const data = await res.json();

    const trailers = data.results?.filter(
      (video) => video.type === "Trailer"
    );

    const trailer = trailers.length ? trailers[0] : data.results[0];

    // console.log(trailer);

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !movieTrailer && getMovieTrailer();
  }, []);
};

export default useGetMovieTrailer;
