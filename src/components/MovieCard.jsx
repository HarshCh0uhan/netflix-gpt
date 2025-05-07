import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath, title, className }) => {
  const fallback = "https://via.placeholder.com/150x225?text=No+Image";
  const imgSrc = posterPath
    ? `https://image.tmdb.org/t/p/w300${posterPath}`
    : fallback;

  return (
    <img
      src={imgSrc}
      alt={title || "Movie Poster"}
      className={`w-40 h-60 object-cover ${className}`}
    />
  );
};


export default MovieCard;
