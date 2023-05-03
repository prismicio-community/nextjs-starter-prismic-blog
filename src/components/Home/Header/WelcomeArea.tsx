import React from 'react';
import TypedHeader from './TypedHeader';

const WelcomeArea = () => (
  <div className="welcome-area">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-right">
          <h2>צפריר ליכטנשטיין</h2>
        </div>
        <div className="col-md-12 text-right">
          <TypedHeader
            strings={[
              'דהדהבום לימוד מיוחד לתופים',
              'מעל 25 שנות ניסיון בלימוד תופים',
              'מתמחה בעבודה עם ילדים ומבוגרים שעל הרצף האוטיסטי',
            ]}
          />
        </div>
      </div>
      <div className="row text-right">
        <div className="col-md-12">
          <div className="welcome-scroll">
            <div className="arrow bounce">
              <a href="#about" className="section-link" data-target="about">
                <i className="fa fa-long-arrow-alt-down fa-2x" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default WelcomeArea;
