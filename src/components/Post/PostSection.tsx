import React from "react";
// import { Image, Transformation } from "cloudinary-react";
import get from "lodash/get";
import PostContent from "./PostContent";
import PostSidebar from "./SideBar/PostSidebar";
import { Blog, SingleBlog, PostThumb } from "./postSectionStyle";

const PostSection: React.FC<{ postData: any }> = ({ postData }) => {
  return (
    <Blog>
      <div className="container">
        <div className="row">
          <div className="col-md-9 col-sm-12">
            <div className="row">
              <div className="col-sm-12 col-md-12">
                <SingleBlog>
                  <PostThumb>
                    {/* <Image
                      cloudName="dadaboom"
                      publicId={get(postData, "image", "default")}
                      className="img-responsive"
                      alt=""
                    >
                      <Transformation width="850" crop="scale" />
                    </Image> */}
                  </PostThumb>
                  <PostContent
                    _id={postData._id}
                    date={postData.date}
                    content={postData.content}
                    title={postData.title}
                  />
                </SingleBlog>
              </div>
            </div>
          </div>
          <PostSidebar />
        </div>
      </div>
    </Blog>
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
