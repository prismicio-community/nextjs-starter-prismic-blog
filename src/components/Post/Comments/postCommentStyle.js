import styled from 'styled-components';

export const PostCommentContainer = styled.li`
  padding: 20px 0;
  border-top: 1px solid #eeeeee;
  list-style: none;
  margin-right: ${props => (`${props.margin || 0}px`)}
`;
export const MediaBody = styled.div`
  border-bottom: 0;
  height: auto;
`;
export const CommentText = styled.p`
  margin-top: 10px;
  margin-bottom: 12px;
`;
export const CommentAuthor = styled.h3`
  margin-top: 0;
  width: 100%;
  float: right;
`;
export const CommentAuthorSeperator = styled.span`
  margin: 0 8px;
  float: right;
`;
export const CommentAuthorLink = styled.div`
  font-family: 'Open Sans Hebrew', sans-serif;
  font-weight: 400;
  font-size: 13px;
  text-decoration: none;
  color: #999;
`;
export const ReplyLink = styled.a`
  && {
    text-decoration: none;
    cursor: pointer;
  }
  svg {
    color: #d6b161;
  }
`;
export const ReplyText = styled.span`
  font-family: 'Open Sans Hebrew', sans-serif;
  font-size: 13px;
  color: #222222;
  padding-right: 6px;
  letter-spacing: 0.5pt;
`;
