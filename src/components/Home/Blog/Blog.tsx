import React from "react";
import BlogBox from "./BlogBox";
import { PostDocument } from "@/prismicio-types";

const Blog: React.FC<{ posts: PostDocument[] }> = ({ posts }) => (
  <section className="blogs-section" id="blogs">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-title">
            <h1>בלוג</h1>
          </div>
        </div>
      </div>
      <div tw="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 auto-rows-fr">
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
