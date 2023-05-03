import React, { useState } from "react";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import TestimonialBox from "./TestimonialBox";
import data from "./TestimonialData";
import tw from "twin.macro";

export type Direction = "left" | "right";

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onArrowClick = (direction: "left" | "right") => {
    let newIndex = direction === "left" ? activeIndex - 1 : activeIndex + 1;
    if (newIndex < 0) newIndex = data.length - 1;
    if (newIndex > data.length - 1) newIndex = 0;
    setActiveIndex(newIndex);
  };

  return (
    <section
      className="testimonials-section"
      id="testimonials"
      tw="bg-gray-100"
    >
      <div className="container">
        <div className="row" tw="flex justify-center items-center">
          <div
            tw="cursor-pointer"
            className="col-md-1"
            onClick={() => onArrowClick("left")}
          >
            <KeyboardArrowRight style={{ fontSize: "35px" }} />
          </div>
          <div className="col-md-10">
            <div tw="pb-7 text-center min-h-[337px] relative">
              <ol
                className="carousel-indicators"
                tw="left-[0%] mr-0 top-auto -bottom-[10px] w-full ml-0 mb-0"
              >
                {data.map((_slider, i) => (
                  <li
                    css={[
                      tw`cursor-pointer w-[6px] h-[6px] bg-[#c0c0c0] rounded mr-3`,
                      i === activeIndex && tw`bg-[#333333] mb-px`,
                    ]}
                    onClick={() => setActiveIndex(i)}
                    key={`sliders-key-${i}`}
                  />
                ))}
              </ol>
              <div
                className="carousel-inner"
                tw="relative h-[307px] w-full overflow-hidden"
              >
                <div tw="flex transition-transform duration-500 ease-in-out">
                  {data.map((item, i) => {
                    return (
                      <TestimonialBox
                        key={`testimonial-key-${i}`}
                        name={item.name}
                        text={item.text}
                        index={i}
                        currentIndex={activeIndex}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div
            tw="cursor-pointer"
            className="col-md-1"
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
