/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import { SidebarTitle, SidebarItem } from "./sidebarSharedStyles";
import Link from "next/link";

const TagList = styled.ul`
  margin-top: 16px;
`;

const TagListItem = styled.li`
  && {
    margin: 6px 0 0 4px;
    float: right;
  }
`;

const TagLink = styled(Link)`
  font-family: "Open Sans Hebrew", sans-serif;
  border: 1px solid #eeeeee;
  text-transform: capitalize;
  color: #666666;
  font-size: 13px;
  && {
    padding: 5px 10px;
    background: transparent;
    border-radius: 0;
  }

  &&:hover {
    border: 1px solid #d6b161;
    transition: 400ms ease;
    background: transparent;
    color: #666666;
  }
  &&:focus {
    background-color: white;
    color: black;
  }
`;

const SEARCH_HREF = "/search?section=tags&query=";

const Tag = (tag: any) => {
  tag = tag.trim();
  const href = `${SEARCH_HREF}${tag.replace(" ", "-")}`;
  return (
    <TagListItem key={tag}>
      <TagLink href={`${href}`}>{tag}</TagLink>
    </TagListItem>
  );
};

const SideBarTagCloud: React.FC<{ tags: any }> = ({ tags }) => (
  <SidebarItem right>
    <SidebarTitle>תגיות</SidebarTitle>
    <TagList className="nav nav-pills">
      {tags.map((tag: any) => Tag(tag))}
    </TagList>
  </SidebarItem>
);

SideBarTagCloud.propTypes = {};

export default SideBarTagCloud;
