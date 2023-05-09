import React from "react";
import { HomepageDocumentDataServicesItem } from "../../../../prismicio-types";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, PrismicText } from "@prismicio/react";

const ServiceBox: React.FC<HomepageDocumentDataServicesItem> = ({
  content,
  icon,
  title,
}) => {
  return (
    <div className="services-box col-md-6 col-sm-12">
      <div role="button" tabIndex={0} className="thumbnail services-box-open">
        <PrismicNextImage field={icon} width={30} height={30} />
        <h3>
          <PrismicText field={title} />
        </h3>
        <div tw="mt-3">
          <PrismicRichText field={content} />
        </div>
      </div>
    </div>
  );
};

export default ServiceBox;
