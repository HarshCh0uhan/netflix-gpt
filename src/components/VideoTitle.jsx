import { RiInformationLine, RiPlayLargeFill } from "@remixicon/react";
import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="flex flex-col justify-center h-screen gap-y-5">
      <h1 className="text-5xl">{title}</h1>
      <p className="text-lg w-1/2">{overview}</p>
      <div className="flex gap-5 font-bold">
        <button className="bg-white text-black text-lg px-5 pr-7 rounded-sm flex items-center gap-2 cursor-pointer">
        <RiPlayLargeFill/>
          Play
        </button>
        <div className="relative">
          <button className="px-5 pr-7 py-3 rounded-sm flex gap-2 text-lg items-center text-white z-10 cursor-pointer">
            <RiInformationLine/>
            More Info
          </button>
          <div className="bg-neutral-500 backdrop-blur-md opacity-30 px-5 py-2 rounded-sm absolute inset-0 -z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
