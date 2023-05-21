/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Link from "next/link";
import styled from "styled-components";

import { SidebarTitle } from "./sidebarSharedStyles";

const SEARCH_END_POINT = "/search?section=category&query=";

const CategoryListItem = styled.li`
  border-bottom: 1px solid #ececec;
  &:last-child {
    border-bottom: 0;
  }
`;
const CategoryListLink = styled(Link)<{ active: boolean }>`
  font-family: "Open Sans Hebrew", sans-serif;
  font-size: 14px;
  color: #222222;
  && {
    padding: 10px 0;
  }

  &&:hover {
    background: none;
    color: #d6b161;
    transition: 200ms ease;
  }

  &&:focus {
    background-color: white;
    color: black;
  }

  ${({ active }) =>
    active &&
    `
    && {
      padding-right: 20px;
    }
    &:before {
      position: absolute;
      content: "";
      border-color: transparent #d6b161 transparent transparent;
      border-width: 8px;
      border-style: solid;
      right: 0;
      margin-top: 2px;
      z-index: 0;
      transition: all 0.3s ease 0s;
      -webkit-transition: all 0.3s ease 0s;
    }
  `}
`;

const Categories = ({
  categories,
  current,
}: {
  categories: string[];
  current: number;
}) =>
  categories.map((category, i) => (
    <CategoryListItem key={category}>
      <CategoryListLink
        href={`${SEARCH_END_POINT}${category}`}
        active={current === i}
      >
        {category}
      </CategoryListLink>
    </CategoryListItem>
  ));

const SideBarCategories = () => {
  const [categories, setCategories] = React.useState<string[]>([]);

  return (
    <div className="text-align-right">
      <SidebarTitle>קטגוריות</SidebarTitle>
      <ul className="nav navbar-stacked">
        {/* {categories.length > 0 && (
          <Categories
            categories={categories}
            current={categories.findIndex((item) => item === category)}
          />
        )} */}
      </ul>
    </div>
  );
};

export default SideBarCategories;
