import React from "react";
import YouTube from "react-youtube";

const PortfolioVideo: React.FC<{ videoId: string }> = ({ videoId }) => {
  return <YouTube videoId={videoId}  className="h-full" iframeClassName="h-full w-full" />;
};

export default PortfolioVideo;
