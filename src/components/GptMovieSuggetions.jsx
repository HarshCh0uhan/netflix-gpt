import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggetions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);

  if (!movieNames) return null;

  return (
    <div className="bg-black/50 p-10 m-10">
      <div>
      {movieNames.map((movieName, index) => (
        <MovieList
          key={`${movieName}-${index}`}
          title={movieName}
          movies={movieResults[index]}
        />
      ))}
      </div>
    </div>
  );
};

export default GptMovieSuggetions;
