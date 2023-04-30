import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

const FacebookNav: React.FC<{ facebookLink: string }> = ({ facebookLink }) => (
  <li>
    <a href={facebookLink} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faFacebookF} width={10} height={10} />
    </a>
  </li>
);

export default FacebookNav;
