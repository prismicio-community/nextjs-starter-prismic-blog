import React from "react";
import { SliceZone } from "@prismicio/react";
import { PostDocumentData } from "@/prismicio-types";
import Paragraph from "@/slices/Paragraph";

const components = {
  paragraph: Paragraph,
};

const PostText: React.FC<{ slices: PostDocumentData["slices"] }> = ({
  slices,
}) => {
  return <SliceZone slices={slices} components={components} />;
};

export default PostText;
