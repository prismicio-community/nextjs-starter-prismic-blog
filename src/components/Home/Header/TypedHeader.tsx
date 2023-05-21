import React from "react";
import Typed from "react-typed";

const TypedHeader: React.FC<{ strings: string[] }> = ({ strings }) => (
  <Typed
    strings={strings}
    typeSpeed={40}
    startDelay={1200}
    backSpeed={40}
    backDelay={500}
    loop
    loopCount={5}
    showCursor={false}
    contentType="html"
    smartBackspace={false}
    className="text-right font-montserrat text-sm tracking-[2px] text-white md:text-[17px]"
  />
);

export default TypedHeader;
