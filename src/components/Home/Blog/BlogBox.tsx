import React from "react";
// @ts-ignore
import { Image, Transformation } from "cloudinary-react";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import ImageWithBlur from "../../Shared/ImageWithBlur";
import { ImageField } from "@prismicio/types";
import Link from "next/link";

type BlogBoxProps = {
  href: string;
  img: ImageField;
  title: string;
  description: string;
};

const BlogBox: React.FC<BlogBoxProps> = ({
  href,
  img,
  title,
  description,
}: BlogBoxProps) => (
  <div className="col-sm-4 col-xs-12" style={{ float: "right" }}>
    <div className="blog-item">
      <div className="blog-img">
        <Link href={href}>
          <ImageWithBlur field={img} />
        </Link>
      </div>
      <div className="blog-content">
        <div className="blog-content-head">
          <h3 className="blog-content-title">
            <a href={`/blog/${href}`}>{title}</a>
          </h3>
        </div>
        <div className="blog-content-desc">
          <p>{description}</p>
        </div>
        <div className="blog-content-footer">
          <Link href={href}>
            <span>קרא עוד</span>
            <KeyboardBackspaceIcon />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default BlogBox;
