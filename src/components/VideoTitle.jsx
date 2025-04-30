import { RiInformationLine, RiPlayFill } from "@remixicon/react";
import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black bg-opacity-75 z-10 flex flex-col justify-end md:justify-end px-4 md:px-16 pb-10 md:pb-32">
      <div className="w-full md:w-1/3">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-5 text-white">
          {title}
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-white mb-6 line-clamp-3 md:line-clamp-4">
          {overview}
        </p>
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center justify-center gap-2 bg-white hover:bg-opacity-80 text-black font-bold py-2 px-5 rounded">
            <RiPlayFill size={24} />
            <span>Play</span>
          </button>
          <button className="flex items-center justify-center gap-2 bg-gray-500 bg-opacity-60 hover:bg-opacity-40 text-white font-bold py-2 px-5 rounded">
            <RiInformationLine size={24} />
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;