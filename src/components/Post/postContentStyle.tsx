import styled from 'styled-components';
import { AlignRight } from '../../styles/sharedStyles';

export const PostContentContainer = styled.div`
  ${AlignRight};
  padding: 20px 0;
  
  p {
    color: #333333;
    font-size: 14px;
    line-height: 25px;
  }
  
  blockquote {
    font-family: 'Open Sans Hebrew', sans-serif;
    color: #000000;
    font-size: 14px;
    line-height: 25px;
    font-weight: 300;
    border-right: 5px solid #d6b161;
    border-left: none;
    padding: 0px 25px;
    margin: 20px 0 20px;
  }
`;

export const PostTitle = styled.h2`
  font-size: 26px;
  display: inline-block;
  font-weight: 400;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 5px;
`;

export const PostAuthor = styled.h3`
  margin-top: 0;
  font-family: 'Open Sans Hebrew', sans-serif;
  font-weight: 300;
  font-size: 12px;
  text-decoration: none;
  color: #666666;
  text-transform: uppercase;
  
  span {
    margin: 0 8px;
  }
`;
