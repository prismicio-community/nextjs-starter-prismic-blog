import React from "react";
import { PrismicRichText } from "@prismicio/react";

import { HomepageDocument } from "../../../../prismicio-types";
import { PickFieldsStartingWith } from "../../../../types";
import ImageWithBlur from "../../Shared/ImageWithBlur";
import SlideWhenVisible from "../../Shared/SlideWhenVisible";

const About: React.FC<
  PickFieldsStartingWith<HomepageDocument["data"], "about">
> = ({ about_content, about_title, about_image }) => {
  return (
    <section id="about" className="bg-white">
      <div className="my-container">
        <div className="pb-12">
          <h1 className="border-r-[5px] border-solid border-r-primary pr-2 text-2xl font-bold tracking-[0.5pt] text-gray-700 text-align-right">
            אודות
          </h1>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex-[1] pl-3">
            <div className="relative mx-auto">
              <ImageWithBlur field={about_image} />
            </div>
          </div>
          <div className="mt-4 flex-[2] px-3 md:mt-0">
            <div className="px-1">
              <SlideWhenVisible>
                <PrismicRichText
                  field={about_title}
                  components={{
                    heading3: ({ children }) => (
                      <h3 tw="text-2xl mb-2 text-primary">{children}</h3>
                    ),
                  }}
                />
              </SlideWhenVisible>
              <PrismicRichText
                field={about_content}
                components={{
                  paragraph: ({ children }) => (
                    <p className="text-gray-600 text-align-right">{children}</p>
                  ),
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
