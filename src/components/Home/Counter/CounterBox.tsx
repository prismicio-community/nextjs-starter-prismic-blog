import React from "react";
import { CounterText, SingleProject, Number } from "./counterStyles";
import { useCountUp } from "use-count-up";

const CounterBox: React.FC<{ to: number; text: string; border?: boolean }> = ({
  to,
  text,
  border = false,
}) => {
  const { value } = useCountUp({ end: to, duration: 6, isCounting: true, thousandsSeparator: "," });
  return (
    <div className="col-md-3 col-sm-6 col-xs-6">
      <SingleProject border={border}>
        <Number>{value}</Number>
        <CounterText>{text}</CounterText>
      </SingleProject>
    </div>
  );
};

export default CounterBox;
