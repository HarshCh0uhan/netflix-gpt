import { useDispatch, useSelector } from "react-redux";
import { getApiOptions } from "../utils/constants";
import { addNowPlayMovies } from "../utils/movieSlice";
import { useEffect, useState } from "react";

const useNowPlayMovies = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const nowPlayingMovies = useSelector((store) => store?.movies?.nowPlayMovies);

  const getNowPlayingMovies = async () => {
    try {
      setLoading(true);
      const apiOptions = await getApiOptions();
      
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        apiOptions
      );

      if (!data.ok) {
        throw new Error(`Failed to fetch: ${data.status} ${data.statusText}`);
      }

      const json = await data.json();
      dispatch(addNowPlayMovies(json.results));
    } catch (err) {
      console.error("Error fetching now playing movies:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!nowPlayingMovies && !loading) {
      getNowPlayingMovies();
    }
  }, [nowPlayingMovies, loading]);

  return { loading, error };
};

export default useNowPlayMovies;