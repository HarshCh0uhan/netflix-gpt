import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayMovies);

  // console.log(movies);

  return (
    <div className="-mt-32 lg:-mt-52 md:-mt-56 relative z-10">
      <MovieList title={"Now Playing"} movies={movies} />
      <MovieList title={"Trending"} movies={movies} />
      <MovieList title={"Popular"} movies={movies} />
      <MovieList title={"Upcoming"} movies={movies} />
      <MovieList title={"Oscar Winning"} movies={movies} />
    </div>
  );
};

export default SecondaryContainer;
