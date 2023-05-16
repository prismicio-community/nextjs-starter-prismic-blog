import React from "react";
import SlideWhenVisible from "../../Shared/SlideWhenVisible";
import { PrismicRichText } from "@prismicio/react";
import { HomepageDocument } from "../../../../prismicio-types";
import { PickFieldsStartingWith } from "../../../../types";
import ImageWithBlur from "../../Shared/ImageWithBlur";

const About: React.FC<
  PickFieldsStartingWith<HomepageDocument["data"], "about">
> = ({ about_content, about_title, about_image }) => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h1>אודות</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-md-push-8">
            <div className="section-picture">
              <ImageWithBlur field={about_image} />
            </div>
          </div>
          <div className="col-md-8 col-md-pull-4">
            <div className="section-content">
              <div className="tab-content">
                <SlideWhenVisible>
                  <PrismicRichText
                    field={about_title}
                    components={{
                      heading3: ({ children }) => (
                        <h3 tw="text-2xl mb-2">{children}</h3>
                      ),
                    }}
                  />
                </SlideWhenVisible>
                <PrismicRichText field={about_content} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
