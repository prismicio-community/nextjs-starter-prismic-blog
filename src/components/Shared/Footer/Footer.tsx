"use client";

import React from "react";

import SlideWhenVisible from "../SlideWhenVisible";

const Footer = () => (
  <div className="bg-white px-0 py-8">
    <div className="my-container">
      <SlideWhenVisible>
        <div className="m-0 text-center font-montserrat text-gray-700 opacity-100 flex-center">
          Rafael Paz © Copyright {new Date().getFullYear()} All Right Reserved
        </div>
      </SlideWhenVisible>
    </div>
  </div>
);

export default Footer;
