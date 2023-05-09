import React from "react";
import PortfolioImage from "./PortfolioImage";
import PortfolioVideo from "./PortfolioVideo";
import "twin.macro";
import "photoswipe/dist/photoswipe.css";
import Image from "next/image";

import { Gallery, Item } from "react-photoswipe-gallery";
import {
  HomepageDocumentDataImagesItem,
  HomepageDocumentDataVideosItem,
} from "../../../../prismicio-types";
import { PrismicNextImage, imgixLoader } from "@prismicio/next";

const Portfolio: React.FC<{
  images: HomepageDocumentDataImagesItem[];
  videos: HomepageDocumentDataVideosItem[];
}> = ({ images, videos }) => (
  <section id="portfolio" className="portfolio-section">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-title">
            <h1>גלריה</h1>
          </div>
        </div>
      </div>
      <div tw="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 auto-rows-fr">
        <Gallery id="portfolio-gallery">
          {images.map(({ image }) => (
            <Item
              key={image.url}
              original={image.url ?? ""}
              thumbnail={`${image.url}&fit=crop&w=424&h=282` ?? ""}
              width={image.dimensions?.width}
              height={image.dimensions?.height}
            >
              {({ ref, open }) => (
                <Image
                  ref={ref as React.MutableRefObject<HTMLImageElement>}
                  width={424}
                  height={282}
                  onClick={open}
                  src={`${image.url}&fit=crop&w=424&h=282` ?? ""}
                  alt={image.alt ?? ""}
                  tw="cursor-pointer w-full"
                />
              )}
            </Item>
          ))}
        </Gallery>
        {videos.map(({ youtubevideoid }) => (
          <PortfolioVideo videoId={youtubevideoid ?? ""} key={youtubevideoid} />
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
