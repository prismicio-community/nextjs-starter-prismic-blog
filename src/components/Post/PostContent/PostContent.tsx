import React from "react";
// import PostComments from './Comments/PostComments';
import { PostDocumentData } from "@/prismicio-types";
import dayjs from "@/src/lib/dayjs";

import PostText from "./PostText";

const PostContent: React.FC<
  Pick<PostDocumentData, "publish_date" | "title" | "slices">
> = ({ publish_date, slices, title }) => (
  <>
    <div className="py-5 text-align-right">
      <div className="mb-2 text-2xl">{title}</div>
      {publish_date && (
        <div className="mb-3 text-sm text-gray-500">
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

export default PostContent;
