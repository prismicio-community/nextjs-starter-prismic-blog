import React from "react";
import PropTypes from "prop-types";

const PostText: React.FC<{ content: string }> = ({ content }) => {
  return (
    // eslint-disable-next-line react/no-danger
    <div dangerouslySetInnerHTML={{ __html: content }} />
  );
};

PostText.propTypes = {
  content: PropTypes.string.isRequired,
};

export default PostText;
