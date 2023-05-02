import React from "react";

const TestimonialBox: React.FC<{
  name: string;
  text: string;
  active: boolean;
}> = (props) => {
  const { active, text, name } = props;
  return (
    <div className={`item${active ? " active" : ""}`}>
      <div className="row">
        <div className="col-sm-12">
          <blockquote className="pt-4 mb-4">
            <p>{`"${text}"`}</p>
          </blockquote>
          <h5>{name}</h5>
        </div>
      </div>
    </div>
  );
};

export default TestimonialBox;
