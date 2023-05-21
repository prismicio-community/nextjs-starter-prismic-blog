import React from "react";
import { PrismicText } from "@prismicio/react";
import { NumberField, RichTextField } from "@prismicio/types";
import { useCountUp } from "use-count-up";

const CounterBox: React.FC<{
  to: NumberField;
  text: RichTextField;
}> = ({ to, text }) => {
  const { value } = useCountUp({
    end: to ?? 0,
    duration: 6,
    isCounting: true,
    thousandsSeparator: ",",
  });
  return (
    <div className="my-8 last:border-none sm:border-white/20 sm:odd:border-l md:border-l">
      <div className="font-athiti text-2xl text-primary">{value}</div>
      <div className="font-hebrew text-white">
        <PrismicText field={text} />
      </div>
    </div>
  );
};

export default CounterBox;
