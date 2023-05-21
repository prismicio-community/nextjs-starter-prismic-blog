import React from "react";
import cn from "@/src/lib/utils/cn";
import { PrismicText } from "@prismicio/react";
import { RichTextField } from "@prismicio/types";

const TestimonialBox: React.FC<{
  name: string;
  text: RichTextField;
  index: number;
  currentIndex: number;
  prevIndex: number;
}> = ({ name, text, index, currentIndex, prevIndex }) => {
  return (
    <div
      className={cn(
        "absolute w-full shrink-0 grow basis-full text-center opacity-0 transition-transform duration-1000 ease-in-out",
        index === currentIndex && "translate-x-0",
        currentIndex > index && "-translate-x-full",
        currentIndex < index && "translate-x-full",
        (index === currentIndex || index === prevIndex) && "opacity-100"
      )}
    >
      <blockquote className="mb-4 border-none pt-4">
        <p className="text-lg italic tracking-wide">
          <PrismicText field={text} />
        </p>
      </blockquote>
      <h5 className="font-bold tracking-wide">{name}</h5>
    </div>
  );
};

export default TestimonialBox;
