import React from "react";
import FacebookNav from "./FacebookNav";
import ItemNav from "./ItemNav";
import { navArray } from "./navArray";

const NavigationItems: React.FC = () => {
  const facebookLink =
    "https://www.facebook.com/%D7%A6%D7%A4%D7%A8%D7%99%D7%A8-%D7%9C%D7%99%D7%9B%D7%98%D7%A0%D7" +
    "%A9%D7%98%D7%99%D7%99%D7%9F-%D7%9C%D7%99%D7%9E%D7%95%D7%93-%D7%AA%D7%95%D7%A4%D7%99%D7%9D-%D7%95%D7%9B%D7%9C" +
    "%D7%99-%D7%94%D7%A7%D7%A9%D7%94-365617346882919/";

  const items = navArray.map((item) => {
    if (item.target === "facebook") {
      return <FacebookNav facebookLink={facebookLink} key="nav-facebook" />;
    }
    return <ItemNav item={item} key={item.target} />;
  });
  return <ul tw="flex text-white text-lg">{items}</ul>;
};

export default NavigationItems;
