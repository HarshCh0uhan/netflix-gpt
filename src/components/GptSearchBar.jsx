import { RiSearch2Line } from "@remixicon/react";
import React from "react";

const GptSearchBar = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bottom-52">
      <form className="bg-zinc-900 w-[90%] p-5 flex items-center justify-center md:w-[60%] h-20 gap-3 rounded-lg">
        <input
          type="text"
          placeholder="What would you love to watch Today ?"
          className="bg-white w-full h-full rounded-lg text-neutral-400 font-extralight md:font-semibold text-center sm:text-sm"
        />
        <button className="bg-red-700 py-2 px-5 rounded-lg font-semibold">Search</button>
      </form>
    </div>
  );
};

export default GptSearchBar;