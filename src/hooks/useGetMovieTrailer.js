import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApiOptions } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";

const useGetMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const movieTrailer = useSelector((store) => store.movies?.trailerVideo);

  const getMovieTrailer = async () => {
    if (!movieId) return;
    
    try {
      setLoading(true);
      const apiOptions = await getApiOptions();
      
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        apiOptions
      );

      if (!res.ok) {
        throw new Error(`Failed to fetch trailer: ${res.status} ${res.statusText}`);
      }

      const data = await res.json();

      const trailers = data.results?.filter(
        (video) => video.type === "Trailer"
      );

      const trailer = trailers.length ? trailers[0] : data.results[0];
      
      if (trailer) {
        dispatch(addTrailerVideo(trailer));
      } else {
        console.warn("No trailer found for movie ID:", movieId);
      }
    } catch (err) {
      console.error("Error fetching movie trailer:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!movieTrailer && !loading) {
      getMovieTrailer();
    }
  }, [movieId, movieTrailer, loading]);

  return { loading, error };
};

export default useGetMovieTrailer;