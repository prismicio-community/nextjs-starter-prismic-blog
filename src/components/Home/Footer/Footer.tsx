import React from "react";
import styled from "styled-components";

const FooterArea = styled.footer`
  background-color: #ffffff;
  padding: 30px 0;
`;

const FooterText = styled.p`
  color: #555555;
  letter-spacing: 1px;
  margin: 0 0 0;
  opacity: 1;
`;

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
