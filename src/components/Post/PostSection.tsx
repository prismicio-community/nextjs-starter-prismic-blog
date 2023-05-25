import React from "react";
import { PostDocumentData } from "@/prismicio-types";
import { PrismicNextImage } from "@prismicio/next";
import dayjs from "dayjs";
// import { Image, Transformation } from "cloudinary-react";
import get from "lodash/get";

import PostContent from "./PostContent/PostContent";
import PostSidebar from "./SideBar/PostSidebar";
import { Blog, PostThumb, SingleBlog } from "./postSectionStyle";
import "dayjs/locale/he";

dayjs.locale("he");

const PostSection: React.FC<
  Pick<PostDocumentData, "header_image" | "publish_date" | "title" | "slices">
> = ({ header_image, publish_date, slices, title }) => {
  return (
    <div className="mt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="sm:w-full md:w-9/12">
            <div className="flex flex-wrap">
              <div className="pb-8">
                <div className="relative overflow-hidden">
                  <PrismicNextImage field={header_image} width={850} />
                </div>
                <PostContent
                  slices={slices}
                  title={title}
                  publish_date={publish_date}
                />
              </div>
            </div>
          </div>
          <PostSidebar />
        </div>
      </div>
    </div>
  );
};

export default PostSection;
