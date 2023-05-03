import React from "react";
// @ts-ignore
import { Image, Transformation } from "cloudinary-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

type BlogBoxProps = {
  href: string;
  img: string;
  title: string;
  text: string;
  alt: string;
};

const BlogBox: React.FC<BlogBoxProps> = ({
  href,
  img,
  title,
  text,
  alt,
}: BlogBoxProps) => (
  <div className="col-sm-4 col-xs-12" style={{ float: "right" }}>
    <div className="blog-item">
      <div className="blog-img">
        <a href={`/blog/${href}`}>
          <Image
            cloudName="dadaboom"
            publicId={img}
            className="img-responsive"
            alt={alt}
          >
            <Transformation width="416" crop="scale" />
          </Image>
        </a>
      </div>
      <div className="blog-content">
        <div className="blog-content-head">
          <h3 className="blog-content-title">
            <a href={`/blog/${href}`}>{title}</a>
          </h3>
        </div>
        <div className="blog-content-desc">
          <p>{text}</p>
        </div>
        <div className="blog-content-footer">
          <a href={`/blog/${href}`}>
            <span>קרא עוד</span>
            <KeyboardBackspaceIcon />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default BlogBox;
