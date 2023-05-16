import React from "react";
import PostSection from "./PostSection";
import PostHeader from "./PostHeader";
import "../../styles/blog.scss";
import { PostDocumentData } from "@/prismicio-types";
// import TopButton from "./TopButton";
// import Footer from "../Shared/Footer/Footer";
// import Contact from "../Shared/Contact/Contact";

export default async function Post({
  header_image,
  publish_date,
  slices,
  title,
}: PostDocumentData) {
  return (
    <>
      <PostHeader />
      <PostSection
        header_image={header_image}
        publish_date={publish_date}
        slices={slices}
        title={title}
      />
      {/* <Contact /> */}
      {/* <Footer /> */}
      {/* <TopButton /> */}
    </>
  );
}
