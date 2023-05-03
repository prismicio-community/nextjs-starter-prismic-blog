import React from "react";
import cx from "classnames";

const TestimonialBox: React.FC<{
  name: string;
  text: string;
  active: boolean;
  moveLeft?: boolean;
  moveRight?: boolean;
}> = ({ name, text, active, moveLeft, moveRight }) => {
  const bla = cx(["item", { active, moveLeft, moveRight }]);
  console.log("bla", bla, name);
  return (
    <div className={cx(["item", { active, moveLeft, moveRight }])}>
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
