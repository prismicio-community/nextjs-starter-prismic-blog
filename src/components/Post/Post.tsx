import React from "react";
import PostSection from "./PostSection";
import PostHeader from "./PostHeader";
import "../../styles/blog.scss";
import TopButton from "./TopButton";
import Footer from "../Shared/Footer/Footer";
// import Contact from "../Shared/Contact/Contact";

const Post: React.FC<{ postData: any }> = ({ postData }) => {
  return (
    <>
      <PostHeader />
      <PostSection postData={postData} />
      {/* <Contact /> */}
      <Footer />
      <TopButton />
    </>
  );
};

export default Post;
