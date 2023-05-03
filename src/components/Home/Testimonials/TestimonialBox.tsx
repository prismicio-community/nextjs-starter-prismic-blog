import React from "react";
import cx from "classnames";

const TestimonialBox: React.FC<{
  name: string;
  text: string;
  active: boolean;
}> = (props) => {
  const { active, text, name } = props;
  return (
    <div className={cx(["item", { active }])}>
      <div className="row">
        <div className="col-sm-12">
          <blockquote tw="pt-4 mb-4">
            <p>{`"${text}"`}</p>
          </blockquote>
          <h5>{name}</h5>
        </div>
      </div>
    </div>
  );
};

export default TestimonialBox;
