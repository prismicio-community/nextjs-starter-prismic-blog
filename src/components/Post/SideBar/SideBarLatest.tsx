/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import { SidebarItem, SidebarTitle } from "./sidebarSharedStyles";
import { latestPosts } from "./SidebarData/latestData";
import { AlignRight } from "../../../styles/sharedStyles";

const Media = styled.div`
  border-bottom: 1px solid #ececec;
  padding-bottom: 10px;
  padding-top: 10px;
  margin-top: 0;
  transition: all 0.3s ease 0s;
  -webkit-transition: all 0.3s ease 0s;
  ${AlignRight};

  img {
    width: 70px;
    height: 60px;
  }

  &:last-child {
    border-bottom: 0;
    padding-bottom: 0;
  }
`;

const MediaBody = styled.div`
  display: table-cell;
  vertical-align: top;
`;

const MediaTitle = styled.h4`
  margin-top: 0;
  margin-bottom: 10px;
`;

const MediaLink = styled.a`
  text-decoration: none;
  color: #222222;
  font-size: 13px;
  font-weight: 400;

  ${Media}:hover & {
    color: #d6b161;
    transition: all 0.6s ease 0s;
    -webkit-transition: all 0.6s ease 0s;
    text-decoration: none;
  }
`;

const MediaText = styled.p`
  color: #666666;
  font-size: 12px;
`;

const imageUrlPrefix = "https://res.cloudinary.com/dadaboom/image/upload";

const Latest = (post: any) => (
  <Media key={post.alt} className="media">
    <div className="image pull-right">
      <a href={post.href}>
        <img src={`${imageUrlPrefix}/${post.image}`} alt={post.alt} />
      </a>
    </div>
    <MediaBody>
      <MediaTitle>
        <MediaLink href={post.href}>{post.text}</MediaLink>
      </MediaTitle>
      <MediaText>{post.date}</MediaText>
    </MediaBody>
  </Media>
);

const SideBarLatest = () => (
  <SidebarItem>
    <SidebarTitle>פוסטים אחרונים</SidebarTitle>
    {latestPosts.map((post: any) => (
      <Latest key={post} />
    ))}
  </SidebarItem>
);

export default SideBarLatest;
