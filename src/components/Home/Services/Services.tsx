import React from "react";
import { HomepageDocumentDataServicesItem } from "@/prismicio-types";
import { asText } from "@prismicio/client";

import ServiceBox from "./ServiceBox";

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
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {services?.map((service) => (
            <ServiceBox key={asText(service.title)} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
