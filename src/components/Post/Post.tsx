import React from "react";
import PostSection from "./PostSection";
import PostHeader from "./PostHeader";
import "../../styles/blog.scss";
// import TopButton from "./TopButton";
// import Footer from "../Shared/Footer/Footer";
import { createClient } from "@/prismicio";
// import Contact from "../Shared/Contact/Contact";

export default async function Post({ postData }: any) {
  return (
    <>
      <PostHeader />
      <PostSection postData={postData} />
      {/* <Contact /> */}
      {/* <Footer /> */}
      {/* <TopButton /> */}
    </>
  );
}
