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
    <div className="mb-8 min-h-[420px] border border-solid border-gray-300 px-8 py-10 transition-colors hover:border-primary hover:bg-white">
      <PrismicNextImage field={icon} width={30} height={30} />
      <h3 className="mt-3 text-lg text-gray-800 text-align-right">
        <PrismicText field={title} />
      </h3>
      <div className="mt-3 text-gray-500">
        <PrismicRichText field={content} />
      </div>
    </div>
  );
};

export default ServiceBox;
