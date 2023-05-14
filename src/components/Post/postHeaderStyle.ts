import styled from "styled-components";
import { AlignRight } from "../../styles/sharedStyles";

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
    font-family: "Open Sans Hebrew", sans-serif;
    color: #ffffff;
  }
  li + li:before {
    color: #d6b161;
  }
`;

export const BreadcrumActiveItem = styled.li`
  font-family: "Open Sans Hebrew", sans-serif;
  text-transform: uppercase;
  font-size: 16px;
  color: #ffffff;
`;

export const HeaderRow = styled.div`
  ${AlignRight}
`;
