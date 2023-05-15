import React from "react";
import PostText from "./PostText";
// import PostComments from './Comments/PostComments';
import { PostDocumentData } from "@/prismicio-types";
import dayjs from "dayjs";
import "dayjs/locale/he";
dayjs.locale("he");

const PostContent: React.FC<
  Pick<PostDocumentData, "publish_date" | "title" | "slices">
> = ({ publish_date, slices, title }) => (
  <>
    <div className="py-5 text-align-right">
      <div className="text-2xl mb-2">{title}</div>
      {publish_date && (
        <div className="text-sm text-gray-500 mb-3">
          <div>{dayjs(new Date(publish_date)).format("MMMM D, YYYY")}</div>
        </div>
      )}
      <PostText slices={slices} />
      {/* <PostComments
        postId={_id}
        isAdmin={isAdmin}
      /> */}
    </div>
  </>
);

// PostContent.propTypes = {
//   _id: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   date: PropTypes.string.isRequired,
//   content: PropTypes.string.isRequired,
//   isAdmin: PropTypes.bool,
// };

export default PostContent;
