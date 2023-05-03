import React from "react";
import YouTube from "react-youtube";
import tw from "twin.macro";

const wrapper = tw`
  [iframe]:(h-full w-full)
`;

const PortfolioVideo: React.FC<{ videoId: string }> = ({ videoId }) => {
  return (
    <div css={wrapper}>
      <YouTube videoId={videoId} tw="h-full" iframeClassName="h-full w-full" />
    </div>
  );
};

export default PortfolioVideo;
