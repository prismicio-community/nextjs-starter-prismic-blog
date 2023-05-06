import React from "react";

const Footer = () => (
  <div tw="bg-white py-8 px-0">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="footer-text text-center">
            <div tw="text-[#555555] m-0 opacity-100 flex items-center justify-center">
              Rafael Paz © Copyright {new Date().getFullYear()} All Right
              Reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
