import React from "react";
// @ts-ignore
import { Image, Transformation } from "cloudinary-react";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import ImageWithBlur from "../../Shared/ImageWithBlur";
import { ImageField, RichTextField } from "@prismicio/types";
import Link from "next/link";
import { PrismicText } from "@prismicio/react";

type BlogBoxProps = {
  href: string;
  img: ImageField;
  title: string;
  description: RichTextField;
};

const BlogBox: React.FC<BlogBoxProps> = ({
  href,
  img,
  title,
  description,
}: BlogBoxProps) => (
  <div className="blog-item" tw="flex flex-col">
    <div className="blog-img">
      <Link href={href}>
        <ImageWithBlur field={img} />
      </Link>
    </div>
    <div className="blog-content" tw="flex-1 flex flex-col">
      <div className="blog-content-head" tw="mb-3">
        <h3 className="blog-content-title">
          <a href={`/blog/${href}`}>{title}</a>
        </h3>
      </div>
      <div className="blog-content-desc" tw="flex-1">
        <p>
          <PrismicText field={description} />
        </p>
      </div>
      <div className="blog-content-footer">
        <Link href={href}>
          <span>קרא עוד</span>
          <KeyboardBackspaceIcon />
        </Link>
      </div>
    </div>
  </div>
);

export default BlogBox;
