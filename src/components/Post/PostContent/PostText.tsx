import React from "react";
import { SliceZone } from "@prismicio/react";
import { PostDocumentData } from "@/prismicio-types";
import Paragraph from "@/slices/Paragraph";
import CenteredText from "@/slices/CenteredText";

const components = {
  paragraph: Paragraph,
  centered_text: CenteredText,
};

const PostText: React.FC<{ slices: PostDocumentData["slices"] }> = ({
  slices,
}) => {
  return <SliceZone slices={slices} components={components} />;
};

export default PostText;
