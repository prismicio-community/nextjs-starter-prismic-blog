import React from "react";
import { PostDocument, PostDocumentData } from "@/prismicio-types";

import Footer from "../Shared/Footer/Footer";
import PostHeader from "./PostHeader";
import PostNavigation from "./PostNavigation";
import PostSection from "./PostSection";

export default async function Post({
  data: { header_image, publish_date, slices, title },
  id,
}: PostDocument<string>) {
  return (
    <>
      <PostHeader />
      <PostSection
        header_image={header_image}
        publish_date={publish_date}
        slices={slices}
        title={title}
      />
      {/*  @ts-expect-error Async Server Component */}
      <PostNavigation currentPostId={id} />
      <Footer />
    </>
  );
}
