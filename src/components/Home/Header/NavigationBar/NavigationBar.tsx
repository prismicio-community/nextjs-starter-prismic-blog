import React, { useState } from "react";
import NavigationItems from "./NavigationItems";
import Brand from "./Brand";
import BurgerMenu from "./BurgerMenu";

const NavigationBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar navbar-default navbar-fixed-top mynavbar flex flex-col">
      <div tw="flex justify-between w-full items-center mx-8 xl:mx-auto max-w-[1320px]">
        <NavigationItems target="desktop" />
        <div onClick={() => setIsOpen((isOpen) => !isOpen)}>
          <BurgerMenu />
        </div>
        <div className="navbar-header">
          <Brand />
        </div>
      </div>
      <NavigationItems target="mobile" isOpen={isOpen} />
    </nav>
  );
};

export default NavigationBar;
