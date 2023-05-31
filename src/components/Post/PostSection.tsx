import React from "react";
import { PostDocumentData } from "@/prismicio-types";

import Footer from "../Shared/Footer/Footer";
import ImageWithBlurSSR from "../Shared/ImageWithBlurSSR";
import PostContent from "./PostContent/PostContent";

const PostSection: React.FC<
  Pick<PostDocumentData, "header_image" | "publish_date" | "title" | "slices">
> = ({ header_image, publish_date, slices, title }) => {
  return (
    <div className="mt-20">
      <div className="mx-auto px-4 my-container">
        <div className="flex flex-col justify-between gap-4 md:flex-row">
          <div className="sm:w-full md:flex-[4]">
            <div className="flex flex-col">
              <div className="overflow-hidden flex-center">
                <ImageWithBlurSSR field={header_image} width={905} />
              </div>
              <PostContent
                slices={slices}
                title={title}
                publish_date={publish_date}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostSection;
