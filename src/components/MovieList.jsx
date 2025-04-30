import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) return <div>Loading...</div>;

  return (
    <div className="px-10 py-3">
      <h1 className="text-3xl font-semibold py-5">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie?.poster_path} className="rounded-xl" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
