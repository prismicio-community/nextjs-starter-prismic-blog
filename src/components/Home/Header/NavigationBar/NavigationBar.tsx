import React, { useState } from "react";

import Brand from "./Brand";
import BurgerMenu from "./BurgerMenu";
import NavigationItems from "./NavigationItems";

const NavigationBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav
      className="fixed top-0 z-20 flex w-full flex-col bg-transparent py-7 transition-all duration-300
    group-[.on-scroll]:bg-white group-[.on-scroll]:py-3"
    >
      <div className="flex w-full items-center justify-between my-container">
        <NavigationItems target="desktop" />
        <div onClick={() => setIsOpen((isOpen) => !isOpen)}>
          <BurgerMenu />
        </div>
        <div>
          <Brand />
        </div>
      </div>
      <NavigationItems target="mobile" isOpen={isOpen} />
    </nav>
  );
};

export default NavigationBar;
