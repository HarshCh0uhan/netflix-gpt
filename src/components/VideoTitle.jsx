import { RiInformationLine, RiPlayFill } from "@remixicon/react";
import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-9/12 sm:h-[70vh] md:h-[80vh] lg:h-screen z-10 bg-gradient-to-r from-black via-black/60 to-transparent flex flex-col justify-end px-4 sm:px-8 md:px-24 pb-16">
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white">
        {title}
      </h1>

      <p className="py-1 text-sm sm:text-base md:text-lg max-w-lg line-clamp-3 text-white">
        {overview}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <button className="bg-white text-black py-2 px-6 text-base sm:text-lg font-bold rounded-md flex items-center justify-center gap-2 cursor-pointer">
          <RiPlayFill />
          Play
        </button>

        <button className="flex items-center justify-center gap-2 bg-neutral-600 text-white py-2 px-6 text-base sm:text-lg rounded-md opacity-90 cursor-help">
          <RiInformationLine />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
