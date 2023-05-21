import React from "react";

import { HomepageDocumentDataRotatingstringsItem } from "../../../../prismicio-types";
import TypedHeader from "./TypedHeader";

const WelcomeArea: React.FC<{
  rotatingStrings: HomepageDocumentDataRotatingstringsItem[];
}> = ({ rotatingStrings }) => (
  <div className="pt-[350px]">
    <div className="my-container">
      <div className="text-align-right">
        <h2 className="mb-6 mt-4 font-secular text-4xl tracking-[2px] text-white md:text-[44px] lg:text-5xl">
          צפריר ליכטנשטיין
        </h2>
      </div>
      <div className="text-align-right">
        <TypedHeader strings={rotatingStrings.map(({ text }) => text ?? "")} />
      </div>
    </div>
  </div>
);

export default WelcomeArea;
