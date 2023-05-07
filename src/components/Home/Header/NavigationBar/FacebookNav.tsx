import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

const FacebookNav: React.FC<{ facebookLink: string }> = ({ facebookLink }) => (
  <li tw="hover:text-primary">
    <a href={facebookLink} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon
        icon={faFacebookF}
        width={15}
        height={15}
        tw="hover:text-primary transition-colors"
      />
    </a>
  </li>
);

export default FacebookNav;
