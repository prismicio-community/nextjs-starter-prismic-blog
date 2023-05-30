"use client";

import { ReactCusdis } from "react-cusdis";

const Comments: React.FC<{ title: string }> = ({ title }) => (
  <ReactCusdis
    attrs={{
      host: "https://cusdis.com",
      appId: "d95cfa8c-2865-4e06-a368-8fa7a60f5e66",
      pageId: "1",
      pageTitle: title ?? "",
      pageUrl: "/blog/we-did-it",
    }}
  />
);

export default Comments;
