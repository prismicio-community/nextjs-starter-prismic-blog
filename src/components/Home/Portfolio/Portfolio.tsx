import React from "react";
import PortfolioImage from "./PortfolioImage";
import PortfolioVideo from "./PortfolioVideo";
import "twin.macro";

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
  </section>
);

export default Portfolio;
