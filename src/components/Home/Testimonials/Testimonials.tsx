import React, { useState } from "react";
import cn from "@/src/lib/utils/cn";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import tw from "twin.macro";

import { HomepageDocumentDataTestimonialsItem } from "../../../../prismicio-types";
import useInterval from "../../../hooks/useInterval";
import TestimonialBox from "./TestimonialBox";

export type Direction = "left" | "right";

const Testimonials: React.FC<{
  testimonials: HomepageDocumentDataTestimonialsItem[];
}> = ({ testimonials }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  // const { setRestart } = useInterval(() => onArrowClick("right"), 5000);

  const onArrowClick = (direction: "left" | "right") => {
    // setRestart(true);
    setPrevIndex(activeIndex);
    let newIndex = direction === "left" ? activeIndex - 1 : activeIndex + 1;
    if (newIndex < 0) newIndex = testimonials.length - 1;
    if (newIndex > testimonials.length - 1) newIndex = 0;
    setActiveIndex(newIndex);
  };

  const onIndicatorClick = (index: number) => {
    // setRestart(true);
    setPrevIndex(activeIndex);
    setActiveIndex(index);
  };

  return (
    <section className="bg-gray-100" id="testimonials">
      <div className="my-container">
        <div className="flex-center">
          <div
            className="flex flex-1 cursor-pointer justify-start"
            onClick={() => onArrowClick("left")}
          >
            <KeyboardArrowRight style={{ fontSize: "35px" }} />
          </div>
          <div className="flex-[10]">
            <div className="relative min-h-[337px] pb-7 text-center">
              <ol className="absolute bottom-[-10px] left-[0%] top-auto mx-0 mb-0 flex w-full justify-center">
                {testimonials.map((_slider, i) => (
                  <li
                    className={cn(
                      "mr-3 h-[6px] w-[6px] cursor-pointer rounded bg-[#c0c0c0]",
                      i === activeIndex && "mb-px bg-[#333333]"
                    )}
                    onClick={() => onIndicatorClick(i)}
                    key={`sliders-key-${i}`}
                  />
                ))}
              </ol>
              <div className="relative h-[670px] w-full overflow-hidden sm:h-[597px] md:h-[417px] lg:h-[307px]">
                <div className="flex transition-transform duration-500 ease-in-out">
                  {testimonials.map((item, i) => {
                    return (
                      <TestimonialBox
                        key={`testimonial-key-${i}`}
                        name={item.name ?? ""}
                        text={item.text ?? ""}
                        index={i}
                        currentIndex={activeIndex}
                        prevIndex={prevIndex}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex flex-1 cursor-pointer justify-end"
            onClick={() => onArrowClick("right")}
          >
            <KeyboardArrowLeft style={{ fontSize: "35px" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
