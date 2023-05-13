import React from "react";
import PropTypes from "prop-types";
// import PostText from './PostText';
// import PostComments from './Comments/PostComments';
import {
  PostContentContainer,
  PostTitle,
  PostAuthor,
} from "./postContentStyle";

const PostContent: React.FC<{
  _id: string;
  title: string;
  date: string;
  content: string;
  isAdmin?: boolean;
}> = ({ _id, title, date, content, isAdmin }) => (
  <>
    <PostContentContainer>
      <PostTitle>{title}</PostTitle>
      <PostAuthor>
        {/* <div>{moment(date).locale("he").format("LL")}</div> */}
        <div>{date}</div>
      </PostAuthor>
      {/* <PostText
        content={content}
      /> */}
      {/* <PostComments
        postId={_id}
        isAdmin={isAdmin}
      /> */}
    </PostContentContainer>
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
