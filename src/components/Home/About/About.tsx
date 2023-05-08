import React from "react";
// @ts-ignore
import { Image } from "cloudinary-react";
import data from "./datat.json";
import useOnScreen from "../../../hooks/useOnScreen";
import SlideWhenVisible from "../../Shared/SlideWhenVisible";
import { HomepageDocument } from "../../../../types.generated";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

const getAboutData = () =>
  data.paragraphs.map((paragraph, i) => (
    <p className="text-right" key={`about-par-${i}`}>
      {paragraph}
    </p>
  ));

const About: React.FC<
  Pick<
    HomepageDocument["data"],
    "about_title" | "about_content" | "about_image"
  >
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
              <PrismicNextImage
                field={about_image}
                className="img-responsive"
              />
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
