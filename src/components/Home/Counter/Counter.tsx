import React from "react";
import { asText } from "@prismicio/client";

import { HomepageDocumentDataCountersItem } from "../../../../prismicio-types";
import CounterBox from "./CounterBox";

const Counter: React.FC<{
  counters: HomepageDocumentDataCountersItem[];
}> = ({ counters }) => (
  <div className="h-full w-full bg-black/90 py-8 text-center">
    <div className="my-container">
      <div className="grid grid-cols-1 place-content-between items-center px-10 sm:grid-cols-2 sm:flex-row md:grid-cols-4">
        {counters.map(({ counter, title }) => (
          <CounterBox to={counter} text={title} key={asText(title)} />
        ))}
      </div>
    </div>
  </div>
);

export default Counter;
