import React from "react";
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
    <div className="flex w-full md:w-1/2 lg:w-1/3 flex-wrap group cursor-pointer p-[10px]">
      <div className="w-full p-1 md:p-2 overflow-hidden">
          <Image
            cloudName="dadaboom"
            publicId={imgName}
            className="img-responsive w-full transition-all duration-[0.6s] ease-[ease] group-hover:opacity-[0.8] group-hover:scale-[1.1]"
            alt={alt}
          >
            <Transformation height="293" width="370" crop="scale" />
          </Image>
      </div>
    </div>
  );
};

export default PortfolioImage;
