import React from "react";
import "twin.macro";
import { ImageField } from "@prismicio/types";
import { PrismicNextImage, imgixLoader } from "@prismicio/next";
import Image from "next/image";
import ImageWithBlur from "../../Shared/ImageWithBlur";

const PortfolioImage: React.FC<{ image: ImageField }> = ({ image }) => {
  return (
    <div tw="cursor-pointer" className="group">
      <div tw="overflow-hidden">
        <ImageWithBlur
          field={image}
          width={424}
          height={282}
          imgixParams={{ fit: "crop", ar: "424:282" }}
        />
      </div>
    </div>
  );
};

export default PortfolioImage;
