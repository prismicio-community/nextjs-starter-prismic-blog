import React from "react";
import PortfolioImage from "./PortfolioImage";
import PortfolioVideo from "./PortfolioVideo";
import "twin.macro";
import "photoswipe/dist/photoswipe.css";

import { Gallery, Item } from "react-photoswipe-gallery";

// https://res.cloudinary.com/dadaboom/image/upload/c_scale,h_335,w_424/v1530620438/gallery_image.jpg
const Portfolio: React.FC = () => (
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
          <Item
            original="https://res.cloudinary.com/dadaboom/image/upload/c_crop,h_800,w_1000/v1530620438/gallery_image.jpg"
            thumbnail="https://res.cloudinary.com/dadaboom/image/upload/c_thumb,h_335,w_424/v1530620438/gallery_image.jpg"
            width="1000"
            height="800"
          >
            {({ ref, open }) => (
              <img
                ref={ref}
                onClick={open}
                src="https://res.cloudinary.com/dadaboom/image/upload/c_thumb,h_335,w_424/v1530620438/gallery_image.jpg"
                tw="cursor-pointer"
              />
            )}
          </Item>
          <Item
            original="https://res.cloudinary.com/dadaboom/image/upload/v1530620438/p2.jpg"
            thumbnail="https://res.cloudinary.com/dadaboom/image/upload/c_scale,h_335,w_424/v1530620438/p2.jpg"
            width="640"
            height="506"
          >
            {({ ref, open }) => (
              <img
                ref={ref}
                onClick={open}
                src="https://res.cloudinary.com/dadaboom/image/upload/c_scale,h_335,w_424/v1530620438/p2.jpg"
                tw="cursor-pointer"
              />
            )}
          </Item>
          <Item
            original="https://res.cloudinary.com/dadaboom/image/upload/v1530620438/p3.jpg"
            thumbnail="https://res.cloudinary.com/dadaboom/image/upload/c_scale,h_335,w_424/v1530620438/p3.jpg"
            width="370"
            height="247"
            tw="cursor-pointer"
          >
            {({ ref, open }) => (
              <img
                ref={ref}
                onClick={open}
                src="https://res.cloudinary.com/dadaboom/image/upload/c_scale,h_335,w_424/v1530620438/p3.jpg"
                tw="cursor-pointer"
              />
            )}
          </Item>
        </Gallery>
        <PortfolioVideo videoId="lUaMXm_DLJ4" />
        <PortfolioVideo videoId="GNFQ8WzHc1w" />
        <PortfolioVideo videoId="IB2v9tw7q_g" />
        <PortfolioVideo videoId="4eNeaim4VRQ" />
        <PortfolioVideo videoId="yDeH1W2eshQ" />
        <PortfolioVideo videoId="qSgojcFYJ1Q" />
      </div>
    </div>
  </section>
);

export default Portfolio;
