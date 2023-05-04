import React from "react";
import tw from "twin.macro";

const TestimonialBox: React.FC<{
  name: string;
  text: string;
  index: number;
  currentIndex: number;
  prevIndex: number;
}> = ({ name, text, index, currentIndex, prevIndex }) => {
  return (
    <div
      className="item"
      css={[
        tw`grow shrink-0 basis-full text-center transition-transform duration-1000 ease-in-out absolute w-full opacity-0`,
        index === currentIndex && tw`translate-x-0`,
        currentIndex > index && tw`-translate-x-full`,
        currentIndex < index && tw`translate-x-full`,
        (index === currentIndex || index === prevIndex) && tw`opacity-100`,
      ]}
    >
      <div className="row">
        <div className="col-sm-12">
          <blockquote tw="pt-4 mb-4 border-none">
            <p tw="text-lg tracking-wide italic">{`"${text}"`}</p>
          </blockquote>
          <h5 tw="font-bold tracking-wide">{name}</h5>
        </div>
      </div>
    </div>
  );
};

export default TestimonialBox;
