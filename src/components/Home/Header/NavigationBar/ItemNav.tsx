import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const onItemClick = () => {
  /* eslint-disable no-undef */
  // $("#navbar-mobile").collapse("hide");
  /* eslint-enable no-undef */
};

const ItemNav: React.FC<{ item: { target: string; name: string } }> = ({
  item,
}) => (
  <li>
    <AnchorLink
      href={`#${item.target}`}
      className="section-link"
      onClick={onItemClick}
    >
      {item.name}
    </AnchorLink>
  </li>
);

export default ItemNav;
