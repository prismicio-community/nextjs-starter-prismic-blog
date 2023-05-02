import React, { useState } from "react";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import TestimonialBox from "./TestimonialBox";
import data from "./TestimonialData";
import Carousel from "react-bootstrap/Carousel";
import { CarouselProps, Container } from "react-bootstrap";
import testimonialData from "./TestimonialData";

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);

  const handleSelect: CarouselProps["onSelect"] = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <Container>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          interval={null}
          indicators={true}
          variant="dark"
        >
          {testimonialData.map((testimonial, i) => (
            <Carousel.Item key={i}>
              <TestimonialBox
                name={testimonial.name}
                text={testimonial.text}
                active={i}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default Testimonials;
