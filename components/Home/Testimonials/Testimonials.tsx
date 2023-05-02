import React, { useState } from "react";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import TestimonialBox from "./TestimonialBox";
import data from "./TestimonialData";
import cx from "classnames";

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onArrowClick = (direction: "left" | "right") => {
    const newIndex = direction === "left" ? activeIndex - 1 : activeIndex + 1;
    if (newIndex < 0) {
      setActiveIndex(data.length - 1);
    } else if (newIndex > data.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(newIndex);
    }
  };
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <div className="row testimonials-row">
          <div
            className="col-md-1 cursor-pointer"
            onClick={() => onArrowClick("left")}
          >
            <KeyboardArrowRight style={{ fontSize: "35px" }} />
          </div>
          <div className="col-md-10">
            <div className="carousel slide" id="quote-carousel">
              <ol className="carousel-indicators">
                {data.map((_slider, i) => (
                  <li
                    // className={i === activeIndex ? "active" : undefined}
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
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div
            className="col-md-1 cursor-pointer"
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
