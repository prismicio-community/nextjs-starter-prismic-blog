import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const ItemNav: React.FC<{ item: { target: string; name: string } }> = ({
  item,
}) => (
  <li>
    <AnchorLink
      tw="hover:text-primary transition-colors"
      href={`#${item.target}`}
      className="section-link"
    >
      {item.name}
    </AnchorLink>
  </li>
);

export default ItemNav;
