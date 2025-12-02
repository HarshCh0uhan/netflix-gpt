import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggetions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);

  if (!movieNames) return null;

  return (
    <div className="bg-black/60 rounded-3xl m-3 md:p-3 md:m-10 lg:p-10">
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
