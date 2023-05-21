import React from "react";
import Link from "next/link";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { PrismicText } from "@prismicio/react";
import { ImageField, RichTextField } from "@prismicio/types";
// @ts-ignore
import { Image, Transformation } from "cloudinary-react";

import ImageWithBlur from "../../Shared/ImageWithBlur";

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
  <div className="flex flex-col">
    <Link href={href}>
      <ImageWithBlur field={img} />
    </Link>
    <div className="relative flex flex-1 flex-col bg-white p-6 shadow-md">
      <div className="mb-3">
        <h3 className="text-xl">
          <a className="text-gray-800" href={`/blog/${href}`}>
            {title}
          </a>
        </h3>
      </div>
      <div className="mb-4 flex-1">
        <p className="text-sm text-gray-600">
          <PrismicText field={description} />
        </p>
      </div>
      <div className="tracking-[0.5pt] text-gray-800">
        <Link href={href}>
          <span className="pl-[6px]">קרא עוד</span>
          <KeyboardBackspaceIcon className="text-primary" />
        </Link>
      </div>
    </div>
  </div>
);

export default BlogBox;
