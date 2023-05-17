import React from "react";
import { cn } from "@/src/lib/utils";
import tw from "twin.macro";

import FacebookNav from "./FacebookNav";
import ItemNav from "./ItemNav";
import { navArray } from "./navArray";

const NavigationItems: React.FC<{
  target: "mobile" | "desktop";
  isOpen?: boolean;
}> = ({ target, isOpen }) => {
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
  return (
    <ul
      className={cn(
        "flex-col items-center font-hebrew text-xl text-white transition-all duration-700 md:flex-row md:space-x-4 md:space-x-reverse",
        {
          "top-20 flex h-[285px] w-full items-start space-y-3 bg-white pr-8 text-gray-800 opacity-100 md:hidden":
            target === "mobile",
        },
        { "h-0 opacity-0": target === "mobile" && !isOpen },
        { "mt-4 pt-4": isOpen },
        { "hidden md:flex": target === "desktop" }
      )}
    >
      {items}
    </ul>
  );
};

export default NavigationItems;
