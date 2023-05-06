import React from "react";
import NavigationItems from "./NavigationItems";
import Brand from "./Brand";

const NavigationBar: React.FC = () => {
  return (
    <nav className="navbar navbar-default navbar-fixed-top mynavbar">
      <div className="container">
        <NavigationItems />
        <div className="navbar-header">
          {/* <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar-mobile"
            aria-expanded="false"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button> */}
          <Brand />
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
