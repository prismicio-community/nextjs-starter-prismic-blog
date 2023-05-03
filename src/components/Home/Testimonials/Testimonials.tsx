import React, { useState } from "react";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import TestimonialBox from "./TestimonialBox";
import data from "./TestimonialData";
import cx from "classnames";

export type Direction = "left" | "right";

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [clickDirection, setClickDirection] = useState<Direction>("left");

  const onArrowClick = (direction: "left" | "right") => {
    setClickDirection(direction);
    setActiveIndex(direction === "left" ? activeIndex - 1 : activeIndex + 1);
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <div className="row testimonials-row">
          <div
            tw="cursor-pointer"
            className="col-md-1"
            onClick={() => onArrowClick("left")}
          >
            <KeyboardArrowRight style={{ fontSize: "35px" }} />
          </div>
          <div className="col-md-10">
            <div className="carousel slide" id="quote-carousel">
              <ol className="carousel-indicators" tw="mr-0">
                {data.map((_slider, i) => (
                  <li
                    className={cx("cursor-pointer rounded", {
                      active: i === activeIndex,
                    })}
                    onClick={() => setActiveIndex(i)}
                    key={`sliders-key-${i}`}
                  />
                ))}
              </ol>
              <div className="carousel-inner">
                {data.map((item, i) => {
                  return (
                    <TestimonialBox
                      key={`testimonial-key-${i}`}
                      name={item.name}
                      text={item.text}
                      active={i === activeIndex}
                      moveLeft={
                        clickDirection === "left" && i === activeIndex + 1
                      }
                      moveRight={
                        clickDirection === "right" && i === activeIndex - 1
                      }
                    />
                  );
                })}
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
