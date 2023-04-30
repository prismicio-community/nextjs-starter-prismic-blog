import React from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import { isMobile } from 'react-device-detect';

const PortfolioVideo = (props) => {
  const { videoId } = props;
  const opts = {
    height: '247',
    width: '370',
  };
  if (isMobile) opts.width = window.innerWidth - 20;
  return (
    <div className="col-md-4 col-sm-6 portfolio-b">
      <YouTube
        videoId={videoId}
        opts={opts}
      />
    </div>
  );
};

PortfolioVideo.propTypes = {
  videoId: PropTypes.string.isRequired,
};

export default PortfolioVideo;
