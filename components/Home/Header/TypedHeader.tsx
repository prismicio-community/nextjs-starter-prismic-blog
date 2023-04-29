import React from "react";
import Typed from "react-typed";

const TypedHeader: React.FC<{ strings: string[] }> = ({ strings }) => (
  <div className="typed-container">
    <Typed
      strings={strings}
      typeSpeed={70}
      startDelay={1200}
      backSpeed={40}
      backDelay={500}
      loop
      loopCount={5}
      showCursor={false}
      cursorChar="|"
      contentType="html"
      smartBackspace={false}
    />
  </div>
);

export default TypedHeader;
