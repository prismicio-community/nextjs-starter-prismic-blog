import React from 'react';
import PropTypes from 'prop-types';
import { PostCommentContainer, ReplyLink, ReplyText } from '../postCommentStyle';
import PostCommentContent from '../PostCommentContent';
import DeleteComment from './DeleteComment';

const COMMENTS_MARGIN = 70;

const Index = ({
  id, name, date, text, depth, onClick, isAdmin,
}) => (
  <>
    <PostCommentContainer
      className="post-comment"
      margin={depth * COMMENTS_MARGIN}
    >
      <PostCommentContent
        name={name}
        date={date}
        text={text}
      />
      <ReplyLink onClick={() => onClick(` הגב ל${name}`, id)}>
        <i className="fa fa-long-arrow-alt-left" aria-hidden="true" />
        <ReplyText>הגב</ReplyText>
      </ReplyLink>
      <DeleteComment
        id={id}
        isAdmin={isAdmin}
      />
    </PostCommentContainer>
  </>
);


Index.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string,
  date: PropTypes.string.isRequired,
  depth: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Index.defaultProps = {
  text: '',
  isAdmin: false,
};

export default Index;
