import React from "react";
import { HomepageDocumentDataServicesItem } from "../../../../prismicio-types";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

const ServiceBox: React.FC<HomepageDocumentDataServicesItem> = ({
  content,
  icon,
  title,
}) => {
  return (
    <div className="services-box col-md-6 col-sm-12">
      <div role="button" tabIndex={0} className="thumbnail services-box-open">
        <PrismicNextImage field={icon} />
        <PrismicRichText field={title} />
        <p tw="mt-3">
          <PrismicRichText field={content} />
        </p>
      </div>
    </div>
  );
};

export default ServiceBox;
