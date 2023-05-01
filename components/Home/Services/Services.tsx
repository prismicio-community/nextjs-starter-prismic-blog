import React from "react";
import data from "./data";
import ServiceBox from "./ServiceBox";

const Services: React.FC = () => (
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
        {data.map(({ Icon, text, title, images }) => (
          <ServiceBox
            key={title}
            title={title}
            text={text}
            images={images ?? null}
          >
            <Icon />
          </ServiceBox>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
