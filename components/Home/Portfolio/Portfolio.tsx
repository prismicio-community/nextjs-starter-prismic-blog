import React from "react";
import PortfolioImage from "./PortfolioImage";
import PortfolioVideo from "./PortfolioVideo";

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
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <PortfolioImage imgName="gallery_image" alt="First Image" />
          <PortfolioImage imgName="p2" alt="Second Image" />
          <PortfolioImage imgName="p3" alt="Third Image" />
          <PortfolioVideo videoId="lUaMXm_DLJ4" />
        <PortfolioVideo videoId="GNFQ8WzHc1w" />
        <PortfolioVideo videoId="IB2v9tw7q_g" />
        <PortfolioVideo videoId="4eNeaim4VRQ" />
        <PortfolioVideo videoId="yDeH1W2eshQ" />
        <PortfolioVideo videoId="qSgojcFYJ1Q" />
        </div>
      </div>
    </div>
  </section>
);

export default Portfolio;
