import React from "react";
import NavigationItems from "./NavigationItems";
import Brand from "./Brand";
import BurgerMenu from "./BurgerMenu";

const NavigationBar: React.FC = () => {
  return (
    <nav className="navbar navbar-default navbar-fixed-top mynavbar flex flex-col">
      <div className="container">
        <NavigationItems target="desktop" />
        <BurgerMenu />
        <div className="navbar-header">
          <Brand />
        </div>
      </div>
      <NavigationItems target="mobile" />
    </nav>
  );
};

export default NavigationBar;
