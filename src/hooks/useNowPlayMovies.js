import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector((store) => store?.movies?.nowPlayMovies);

  const getNowPLayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    // console.log(json.results);

    dispatch(addNowPlayMovies(json.results));
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPLayingMovies();
  }, []);
};

export default useNowPlayMovies;
