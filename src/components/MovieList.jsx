import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) return <div>Loading...</div>;

  return (
    <div className="px-10 py-5">
      <h1 className="text-3xl font-semibold py-3 text-white">{title}</h1>
      <div className="flex overflow-x-auto scrollbar-hide scroll-smooth">
        <div className="flex gap-4">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie?.poster_path}
              title={movie?.title}
              className="rounded-xl flex-shrink-0 w-40" // ensures fixed width
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
