import { RiInformationLine, RiPlayFill } from "@remixicon/react";
import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video flex flex-col justify-end pb-[20%] px-4 sm:px-8 md:px-24 absolute bg-gradient-to-r from-black to-transparent z-10">
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white">
        {title}
      </h1>

      <p className="py-4 text-sm sm:text-base md:text-lg max-w-lg text-white">
        {overview}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mt-2">
        <button className="bg-white text-black py-2 px-6 text-base sm:text-lg font-bold rounded-md flex items-center justify-center gap-2">
          <RiPlayFill />
          Play
        </button>

        <button className="flex items-center justify-center gap-2 bg-neutral-600 text-white py-2 px-6 text-base sm:text-lg rounded-md opacity-90">
          <RiInformationLine />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
