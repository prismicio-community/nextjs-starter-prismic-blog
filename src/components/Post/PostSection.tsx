import React from "react";
// import { Image, Transformation } from "cloudinary-react";
import get from "lodash/get";
import PostContent from "./PostContent";
import PostSidebar from "./SideBar/PostSidebar";
import { Blog, SingleBlog, PostThumb } from "./postSectionStyle";
import { PrismicNextImage } from "@prismicio/next";

const PostSection: React.FC<{ postData: any }> = ({ postData }) => {
  return (
    <div className="mt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="md:w-9/12 sm:w-full">
            <div className="flex flex-wrap">
              <div className="col-sm-12 col-md-12">
                <div className="pb-8">
                  <div className="relative overflow-hidden">
                    <PrismicNextImage
                      field={postData.header_image}
                      width={850}
                    />
                    {/* <Image
                      cloudName="dadaboom"
                      publicId={get(postData, "image", "default")}
                      className="img-responsive"
                      alt=""
                    >
                      <Transformation width="850" crop="scale" />
                    </Image> */}
                  </div>
                  {/* <PostContent
                    _id={postData._id}
                    date={postData.date}
                    content={postData.content}
                    title={postData.title}
                  /> */}
                </div>
              </div>
            </div>
          </div>
          {/* <PostSidebar /> */}
        </div>
      </div>
    </div>
  );
};

// PostSection.propTypes = {
//   postData: PropTypes.shape({
//     __v: PropTypes.number,
//     _id: PropTypes.string.isRequired,
//     comments: PropTypes.string,
//     content: PropTypes.string.isRequired,
//     date: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     latestPosts: PropTypes.string,
//     tags: PropTypes.array.isRequired,
//     title: PropTypes.string.isRequired,
//     url: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default PostSection;
