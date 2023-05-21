import React from "react";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FacebookNav: React.FC<{ facebookLink: string }> = ({ facebookLink }) => (
  <li className="hover:text-primary">
    <a href={facebookLink} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon
        icon={faFacebookF}
        width={15}
        height={15}
        className="transition-colors hover:text-primary"
      />
    </a>
  </li>
);

export default FacebookNav;
