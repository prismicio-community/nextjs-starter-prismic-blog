import React from "react";
import YouTube from "react-youtube";
import { isMobile } from "react-device-detect";

const PortfolioVideo: React.FC<{ videoId: string }> = ({ videoId }) => {
  const opts = {
    height: 247,
    width: 360,
  };
  if (isMobile) opts.width = window.innerWidth - 20;
  return (
    <div className="p-[10px] overflow-hidden h-[255px]">
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default PortfolioVideo;
