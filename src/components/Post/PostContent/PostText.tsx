import React from "react";
import { SliceZone } from "@prismicio/react";
import { PostDocumentData } from "@/prismicio-types";
import ParagraphSlice from "./slices/ParagraphSlice";

const components = {
  paragraph: ParagraphSlice,
};

const PostText: React.FC<{ slices: PostDocumentData["slices"] }> = ({
  slices,
}) => {
  console.log("@@@ ~ slices:", slices);
  return <SliceZone slices={slices} components={components} />;
};

export default PostText;
