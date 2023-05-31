import React from "react";
import { PostDocumentData } from "@/prismicio-types";

import PostHeader from "./PostHeader";
import PostSection from "./PostSection";

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
    </>
  );
}
