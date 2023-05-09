import React from "react";
import CounterBox from "./CounterBox";
import { CountersSection, Overlay } from "./counterStyles";
import { HomepageDocumentDataCountersItem } from "../../../../prismicio-types";
import * as prismicH from "@prismicio/helpers";

const Counter: React.FC<{
  counters: HomepageDocumentDataCountersItem[];
}> = ({ counters }) => (
  <CountersSection className="counter-section text-center">
    <Overlay id="counter" className="overlay">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <div className="projects">
              <div className="row">
                {counters.map(({ counter, title }) => (
                  <CounterBox
                    border
                    to={counter}
                    text={title}
                    key={prismicH.asText(title)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Overlay>
  </CountersSection>
);

export default Counter;
