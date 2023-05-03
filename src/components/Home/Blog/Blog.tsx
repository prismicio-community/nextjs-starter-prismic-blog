import React from 'react';
import BlogBox from './BlogBox';

const Blog = () => (
  <section className="blogs-section" id="blogs">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-title">
            <h1>בלוג</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <BlogBox
          title="מוזיקה היא שפה אבל לימוד מוזיקה הוא הרבה יותר מלימוד שפה"
          img="Cover/5.jpg"
          alt="סודות לחיים"
          href="music-teaching"
          text={'השבוע הסתיימה שנת הלימודים באחד מבתי הספר בהם אני מלמד.'
          + ' השנה הזמנו את הורי התלמידים לשיעור כלי הקשה רגיל, כמו זה שיש לנו כל שבוע...'}
        />
      </div>
    </div>
  </section>
);

export default Blog;
