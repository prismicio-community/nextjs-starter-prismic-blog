import styled from 'styled-components';
import { AlignRight } from '../../styles/sharedStyles';

export const PostBG = styled.header`
  background-image: url(../img/..); /* --- background image here --- */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 0px;
  background-attachment: fixed;
  position: relative;
  height: 350px;
  min-height: 0;
  overflow-y: hidden;
`;

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.95);
  height: 100%;
`;

export const BlogArea = styled.div`
  padding: 120px 0 0;
`;

export const BlogAreaHeader = styled.h2`
  color: #ffffff;
  font-size: 40px;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const BlogAreaPara = styled.p`
  color: #ffffff;
  font-size: 16px;
  font-weight: 300;
  font-family: 'Open Sans Hebrew', sans-serif;
`;

export const Breadcrum = styled.ol`
  padding: 8px 0;
  list-style: none;
  background-color: transparent;
  border-radius: 0;
  margin-bottom: 0;
  margin-top: 20px;
  a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 16px;
    font-family: 'Open Sans Hebrew', sans-serif;
    color: #ffffff;
  }
  li+li:before{
    color: #d6b161;
  }
`;

export const BreadcrumActiveItem = styled.li`
  font-family: 'Open Sans Hebrew', sans-serif;
  text-transform: uppercase;
  font-size: 16px;
  color: #ffffff;
`;

export const HeaderRow = styled.div`
  ${AlignRight}
`;
