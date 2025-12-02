import React, { useEffect, useRef, useState } from "react";
import { setupAI, initializeAI } from "../utils/openai";
import { getApiOptions } from "../utils/constants";
import { addGptMovies } from "../utils/gptSlice";
import { useDispatch, useSelector } from "react-redux";

const GptSearchBar = () => {
  const searchText = useRef();
  const dispatch = useDispatch();
  
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState(false);
  const [aiInstance, setAiInstance] = useState(null);

  const { movieNames } = useSelector((store) => store.gpt);
  const isSearch = !movieNames; // Search bar centered only if no results

  // Initialize AI on component mount
  useEffect(() => {
    const initAI = async () => {
      try {
        const ai = await initializeAI();
        setAiInstance(ai);
      } catch (err) {
        console.error("Failed to initialize AI:", err);
        setError(true);
      }
    };
    
    initAI();
  }, []);

  const movieSearch = async (movie) => {
    try {
      const apiOptions = await getApiOptions();
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
        apiOptions
      );

      const data = await res.json();
      return data.results;
    } catch (err) {
      console.error("Error searching for movie:", err);
      setError(true);
      return [];
    }
  };

  const handleSearch = async () => {
    if (isSearching || !aiInstance) return; // Prevent multiple requests
    setIsSearching(true);

    try {
      if (!searchText.current.value) {
        setError(true);
        setIsSearching(false);
        return;
      }

      const gptQuery =
        "Act as a Movie Recommendation system and suggest some movies for the query : " +
        searchText.current.value +
        ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya.";

      const res = await aiInstance.models.generateContent({
        model: "gemini-2.0-flash",
        contents: gptQuery,
      });

      // Search for Movies
      const tmdbResults = res?.text.split(",").map((movie) => movie.trim());
      console.log(tmdbResults);

      const searchedMovies = await Promise.all(
        tmdbResults.map((movie) => movieSearch(movie))
      );

      console.log(searchedMovies);

      dispatch(
        addGptMovies({
          movieNames: tmdbResults,
          movieResults: searchedMovies,
        })
      );
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setTimeout(() => setIsSearching(false), 1000); // debounce 1s
    }
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(false);
      }, 3000); // 3 seconds
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <div className="flex items-center justify-center">
      {error && (
        <div role="alert" className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Error! Task failed.</span>
        </div>
      )}
      <div
        className={`${
          isSearch ? "absolute inset-0 bottom-1/12" : "relative mt-20 mb-4 w-full"
        } flex items-center justify-center`}
      >
        <form
          className="bg-black/60 w-[90%] p-5 flex items-center justify-center md:w-[60%] h-20 gap-3 rounded-lg"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchText}
            type="search"
            placeholder="Search Movies"
            className="bg-neutral-800/80 w-full h-full rounded-lg text-white font-extralight md:font-semibold text-center sm:text-sm pr-3"
          />
          <button
            className={`${isSearching ? 'bg-gray-600' : 'bg-red-700'} py-2 px-5 rounded-lg font-semibold`}
            onClick={handleSearch}
            disabled={isSearching || !aiInstance}
          >
            {isSearching ? 'Searching...' : 'Search'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;