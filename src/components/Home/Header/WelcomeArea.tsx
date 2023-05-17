import React from "react";

import { HomepageDocumentDataRotatingstringsItem } from "../../../../prismicio-types";
import TypedHeader from "./TypedHeader";

const WelcomeArea: React.FC<{
  rotatingStrings: HomepageDocumentDataRotatingstringsItem[];
}> = ({ rotatingStrings }) => (
  <div className="welcome-area">
    <div className="container mx-auto">
      <div className="row">
        <div className="col-md-12 text-align-right">
          <h2>צפריר ליכטנשטיין</h2>
        </div>
        <div className="col-md-12 text-align-right">
          <TypedHeader
            strings={rotatingStrings.map(({ text }) => text ?? "")}
          />
        </div>
      </div>
      <div className="row text-align-right">
        <div className="col-md-12">
          <div className="welcome-scroll" />
        </div>
      </div>
    </div>
  </div>
);

export default WelcomeArea;
