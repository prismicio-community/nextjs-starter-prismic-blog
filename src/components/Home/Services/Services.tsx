import React from "react";
import { HomepageDocumentDataServicesItem } from "@/prismicio-types";
import { asText } from "@prismicio/client";

import SectionTitle from "../../Shared/SectionTitle";
import ServiceBox from "./ServiceBox";

const Services: React.FC<{ services: HomepageDocumentDataServicesItem[] }> = ({
  services,
}) => {
  return (
    <section id="services" className="bg-gray-100">
      <div className="my-container">
        <SectionTitle>שירותים</SectionTitle>
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
