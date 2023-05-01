import React from "react";
import PropTypes from "prop-types";
// @ts-ignore
import { Image, Transformation } from "cloudinary-react";
import cloudinary from "cloudinary-core";

// @ts-ignore
const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: "dadaboom" });

const PortfolioImage: React.FC<{ imgName: string; alt: string }> = ({
  alt,
  imgName,
}) => {
  return (
    <div className="p-[10px] overflow-hidden h-[255px]">
      <a href={cloudinaryCore.url(imgName)} className="">
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

export default PortfolioImage;
