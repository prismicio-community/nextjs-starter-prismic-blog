import React from "react";
import YouTube from "react-youtube";

const PortfolioVideo: React.FC<{ videoId: string }> = ({ videoId }) => {
  return (
    <div tw="[iframe]:(h-full w-full)">
      <YouTube videoId={videoId} tw="h-full" iframeClassName="h-full w-full" />
    </div>
  );
};

export default PortfolioVideo;
