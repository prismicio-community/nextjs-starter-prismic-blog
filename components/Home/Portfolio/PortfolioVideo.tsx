import React from "react";
import YouTube from "react-youtube";
import { isMobile } from "react-device-detect";

const PortfolioVideo: React.FC<{ videoId: string }> = ({ videoId }) => {
  const opts = {
    height: 'auto',
    width: '100%',
  };
  // if (isMobile) opts.width = window.innerWidth - 20;
  return (
    <div className="flex w-full md:w-1/2 lg:w-1/3 flex-wrap group cursor-pointer p-[10px]">
      <div className="w-full p-1 md:p-2 overflow-hidden">
        <YouTube videoId={videoId} opts={opts} />
      </div>
    </div>
  );
};

export default PortfolioVideo;
