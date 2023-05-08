import React from "react";
import * as prismicH from "@prismicio/helpers";
import ServiceBox from "./ServiceBox";
import { HomepageDocumentDataServicesItem } from "../../../../prismicio-types";

const Services: React.FC<{ services: HomepageDocumentDataServicesItem[] }> = ({
  services,
}) => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h1 data-tip data-for="happyFace">
                שירותים
              </h1>
            </div>
          </div>
        </div>
        <div className="row">
          {services?.map((service) => (
            <ServiceBox key={prismicH.asText(service.title)} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
