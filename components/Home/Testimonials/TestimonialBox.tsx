import React from "react";

const TestimonialBox: React.FC<{
  name: string;
  text: string;
  active: number;
}> = (props) => {
  const { active, text, name } = props;
  return (
    <div className={`item${active > 0 ? " active" : ""}`}>
      <div className="row">
        <div className="col-sm-12">
          <blockquote className="border-none pt-5 mb-5">
            <p className="text-lg text-center italic leading-8">{`"${text}"`}</p>
          </blockquote>
          <h5 className="font-bold tracking-[1px] text-center">{name}</h5>
        </div>
      </div>
    </div>
  );
};

export default TestimonialBox;
