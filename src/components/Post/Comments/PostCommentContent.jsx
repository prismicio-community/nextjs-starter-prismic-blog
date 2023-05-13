import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';

import {
  CommentAuthor,
  CommentAuthorLink,
  CommentAuthorSeperator,
  CommentText, MediaBody,
} from './postCommentStyle';

const AuthorText = styled.div`
  float: right;
`;

const CommentDate = ({ date }) => {
  const commentDate = moment(date).locale('he');
  if (moment().diff(commentDate, 'days') > 30) return commentDate.format('LL');
  return commentDate.fromNow();
};

const CommentTextContent = ({ text }) => text.split('\n').map((item, key) => (
  <span key={key}>
    {item}
    <br />
  </span>
));

const PostCommentContent = ({ name, date, text }) => (
  <MediaBody className="post-comment-content">
    <CommentAuthor>
      <CommentAuthorLink href="#">
        <AuthorText>{name}</AuthorText>
        <CommentAuthorSeperator>|</CommentAuthorSeperator>
        <AuthorText>
          <CommentDate
            date={date}
          />
        </AuthorText>
      </CommentAuthorLink>
    </CommentAuthor>
    <CommentText>
      <CommentTextContent
        text={text}
      />
    </CommentText>
  </MediaBody>
);

PostCommentContent.propTypes = {
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default PostCommentContent;
