import React from "react";
import { ImageField } from "@prismicio/types";

import ImageWithBlur from "../../Shared/ImageWithBlur";

const PortfolioImage: React.FC<{ image: ImageField }> = ({ image }) => {
  return (
    <div className="group cursor-pointer">
      <div className="overflow-hidden">
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
