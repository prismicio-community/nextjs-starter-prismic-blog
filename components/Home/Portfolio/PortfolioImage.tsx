import React from 'react';
import PropTypes from 'prop-types';
import { Image, Transformation } from 'cloudinary-react';
import cloudinary from 'cloudinary-core';

const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: 'dadaboom' });

const PortfolioImage = (props) => {
  const { imgName, alt } = props;
  return (
    <div className="col-md-4 col-sm-6 portfolio-b">
      <a href={cloudinaryCore.url(imgName)} className="portfolio-box">
        <Image
          cloudName="dadaboom"
          publicId={imgName}
          className="img-responsive"
          alt={alt}
        >
          <Transformation height="293" width="370" crop="scale" />
        </Image>
      </a>
    </div>
  );
};

PortfolioImage.propTypes = {
  imgName: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default PortfolioImage;
