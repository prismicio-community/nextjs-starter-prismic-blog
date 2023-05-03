import React from 'react';
// @ts-ignore
import { Image } from 'cloudinary-react';
import data from './datat.json';


const getAboutData = () => data.paragraphs.map((paragraph, i) => (
  <p className="text-right" key={`about-par-${i}`}>
    {paragraph}
  </p>
));

const About = () => (
  <section id="about" className="about-section">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-title">
            <h1>אודות</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-md-push-8">
          <div className="section-picture">
            <Image
              cloudName="dadaboom"
              publicId="Cover/about.jpg"
              className="img-responsive"
              alt="about cover"
            />
          </div>
        </div>
        <div className="col-md-8 col-md-pull-4">
          <div className="section-content">
            <div className="tab-content">
              {/* <ScrollAnimation
                animateIn="fadeInUp"
                animateOnce
              > */}
                <h3
                  className="text-right"
                >
                צפריר ליכטנשטיין
                </h3>
              {/* </ScrollAnimation> */}
              { getAboutData() }
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
