import React from "react";
import Lightbox from "yet-another-react-lightbox";

import {
  HomepageDocumentDataImagesItem,
  HomepageDocumentDataVideosItem,
} from "../../../../prismicio-types";
import PortfolioImage from "./PortfolioImage";
import PortfolioVideo from "./PortfolioVideo";
import "yet-another-react-lightbox/styles.css";
import SectionTitle from "../../Shared/SectionTitle";
import NextJsImage from "./PortfolioNextImage";

const Portfolio: React.FC<{
  images: HomepageDocumentDataImagesItem[];
  videos: HomepageDocumentDataVideosItem[];
}> = ({ images, videos }) => {
  const [open, setOpen] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  return (
    <section id="portfolio">
      <div className="my-container">
        <SectionTitle>גלריה</SectionTitle>
        <div className="grid auto-rows-fr grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {images.map(({ image }, i) => (
            <div
              key={image.url}
              onClick={() => {
                setCurrentIndex(i);
                setOpen(true);
              }}
            >
              <PortfolioImage image={image} key={image.url} />
            </div>
          ))}
          {videos.map(({ youtubevideoid }) => (
            <PortfolioVideo
              videoId={youtubevideoid ?? ""}
              key={youtubevideoid}
            />
          ))}
        </div>
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={currentIndex}
        slides={images.map(({ image }) => ({
          src: image.url ?? "",
          alt: image.alt ?? "",
          height: image.dimensions?.height ?? 1,
          width: image.dimensions?.width ?? 1,
        }))}
        render={{ slide: NextJsImage }}
      />
    </section>
  );
};

export default Portfolio;
