import React from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";

const PortfolioVideo: React.FC<{ videoId: string }> = ({ videoId }) => {
  return (
    <LiteYouTubeEmbed
      id={videoId}
      title="YouTube Embed"
      iframeClass="h-full w-full"
    />
  );
};

export default PortfolioVideo;
