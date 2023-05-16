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
      <div className="row">
        {posts.map((post) => (
          <BlogBox
            title={post.data.title}
            img={post.data.header_image}
            href={post.url}
          />
        ))}
        <BlogBox
          title="מוזיקה היא שפה אבל לימוד מוזיקה הוא הרבה יותר מלימוד שפה"
          img="Cover/5.jpg"
          href="music-teaching"
          text={
            "השבוע הסתיימה שנת הלימודים באחד מבתי הספר בהם אני מלמד." +
            " השנה הזמנו את הורי התלמידים לשיעור כלי הקשה רגיל, כמו זה שיש לנו כל שבוע..."
          }
        />
      </div>
    </div>
  </section>
);

export default Blog;
