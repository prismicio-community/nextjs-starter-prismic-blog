import React from "react";
import { CounterText, SingleProject, Number } from "./counterStyles";
import { useCountUp } from "use-count-up";
import { NumberField, RichTextField } from "@prismicio/types";
import { PrismicText } from "@prismicio/react";

const CounterBox: React.FC<{
  to: NumberField;
  text: RichTextField;
  border?: boolean;
}> = ({ to, text, border = false }) => {
  const { value } = useCountUp({
    end: to ?? 0,
    duration: 6,
    isCounting: true,
    thousandsSeparator: ",",
  });
  return (
    <div className="col-md-3 col-sm-6 col-xs-6">
      <SingleProject border={border}>
        <Number>{value}</Number>
        <CounterText>
          <PrismicText field={text} />
        </CounterText>
      </SingleProject>
    </div>
  );
};

export default CounterBox;
