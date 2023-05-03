import { RemoveRedEye } from "@material-ui/icons";
import React, { useState } from "react";
import Lightbox from "react-images";
import { Tooltip } from "react-tooltip";

const ServiceBox: React.FC<{
  title: string;
  text: string;
  children: React.ReactNode;
  images?: Array<{ src: string; caption?: string }> | null;
}> = ({ children, text, title, images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const isImages = !!images;

  return (
    <div className="services-box col-md-6 col-sm-12">
      <div
        role="button"
        tabIndex={0}
        className="thumbnail services-box-open"
        onClick={() => setIsOpen(true)}
        style={{ cursor: isImages ? "pointer" : undefined }}
        data-tip={isImages}
        data-tooltip-id={"services-tooltip"}
      >
        {children}
        <h3>{title}</h3>
        <p>
          {text.split("@@").map((item, key) => (
            <span key={key}>
              {item}
              <br />
            </span>
          ))}
        </p>
      </div>
      {isImages && (
        <div>
          <Tooltip id="services-tooltip">
            <span>לחץ למידע נוסף</span>
          </Tooltip>
          <span
            role="button"
            tabIndex={0}
            className="services-box-open-icon"
            onClick={() => setIsOpen(true)}
          >
            <RemoveRedEye style={{ fontSize: "35px" }} />
          </span>
        </div>
      )}
      {/* {isImages && (
        <Lightbox

          // images={images}
          isOpen={isOpen}
          currentImage={currentImage}
          onClickPrev={() => {
            this.setState({ currentImage: currentImage - 1 });
          }}
          onClickNext={() => {
            this.setState({ currentImage: currentImage + 1 });
          }}
          onClose={() => this.setState({ isOpen: false })}
          backdropClosesModal
          showImageCount={false}
        />
      )} */}
    </div>
  );
};

export default ServiceBox;
