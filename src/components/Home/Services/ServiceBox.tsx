import React from "react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, PrismicText } from "@prismicio/react";

import { HomepageDocumentDataServicesItem } from "../../../../prismicio-types";

const ServiceBox: React.FC<HomepageDocumentDataServicesItem> = ({
  content,
  icon,
  title,
}) => {
  return (
    <div className="thumbnail services-box-open">
      <PrismicNextImage field={icon} width={30} height={30} />
      <h3>
        <PrismicText field={title} />
      </h3>
      <div tw="mt-3">
        <PrismicRichText field={content} />
      </div>
    </div>
  );
};

export default ServiceBox;
