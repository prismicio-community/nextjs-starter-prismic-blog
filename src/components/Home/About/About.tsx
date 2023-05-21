import React from "react";
import { PrismicRichText } from "@prismicio/react";

import { HomepageDocument } from "../../../../prismicio-types";
import { PickFieldsStartingWith } from "../../../../types";
import ImageWithBlur from "../../Shared/ImageWithBlur";
import SectionTitle from "../../Shared/SectionTitle";
import SlideWhenVisible from "../../Shared/SlideWhenVisible";

const About: React.FC<
  PickFieldsStartingWith<HomepageDocument["data"], "about">
> = ({ about_content, about_title, about_image }) => {
  return (
    <section id="about" className="bg-white">
      <div className="my-container">
        <SectionTitle>אודות</SectionTitle>
        <div className="flex flex-col md:flex-row">
          <div className="flex-[1] md:pl-3">
            <div className="relative mx-auto">
              <ImageWithBlur field={about_image} />
            </div>
          </div>
          <div className="mt-4 flex-[2] md:mt-0 md:px-3">
            <div className="px-1">
              <SlideWhenVisible>
                <PrismicRichText
                  field={about_title}
                  components={{
                    heading3: ({ children }) => (
                      <h3 className="mb-2 text-2xl text-primary">{children}</h3>
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
