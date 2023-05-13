import React from "react";
import styled from "styled-components";
import {
  PostBG,
  Overlay,
  BlogArea,
  BlogAreaHeader,
  BlogAreaPara,
  Breadcrum,
  BreadcrumActiveItem,
  HeaderRow,
} from "./postHeaderStyle";
import Link from "next/link";

const Container = styled.div`
  padding-right: 20px;
  padding-left: 20px;
`;

const PostHeader = () => (
  <PostBG>
    <Overlay>
      <BlogArea>
        <Container className="container">
          <HeaderRow className="row">
            <div className="col-md-12">
              <BlogAreaHeader id="blog-top-header">דהדהבום בלוג</BlogAreaHeader>
              <BlogAreaPara>
                הבלוג של צפריר ליכטנשטיין על תופים, חינוך ומה שביניהם
              </BlogAreaPara>
            </div>
            <div className="col-md-12">
              <Breadcrum className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href={"/"}>בית</Link>
                </li>
                <BreadcrumActiveItem className="breadcrumb-item">
                  דהדהבום בלוג
                </BreadcrumActiveItem>
              </Breadcrum>
            </div>
          </HeaderRow>
        </Container>
      </BlogArea>
    </Overlay>
  </PostBG>
);

export default PostHeader;
