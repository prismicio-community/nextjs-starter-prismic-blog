import React from "react";
import { PostDocument } from "@/prismicio-types";

import SectionTitle from "../../Shared/SectionTitle";
import BlogBox from "./BlogBox";

const Blog: React.FC<{ posts: PostDocument[] }> = ({ posts }) => (
  <section id="blogs">
    <div className="my-container">
      <SectionTitle>בלוג</SectionTitle>
      <div className="grid auto-rows-fr grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogBox
            key={post.id}
            title={post.data.title ?? ""}
            img={post.data.header_image}
            href={post.url ?? ""}
            description={post.data.description ?? ""}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Blog;
