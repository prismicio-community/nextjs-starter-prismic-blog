import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const ItemNav: React.FC<{ item: { target: string; name: string } }> = ({
  item,
}) => (
  <li>
    <AnchorLink
      className="transition-colors hover:text-primary"
      href={`#${item.target}`}
    >
      {item.name}
    </AnchorLink>
  </li>
);

export default ItemNav;
