import React from "react";
import NavigationItems from "./NavigationItems";

const NavigationBar: React.FC = () => {
  return (
    <nav className="navbar navbar-default navbar-fixed-top mynavbar">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar-mobile"
            aria-expanded="false"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href=".">
            D<span>A</span>D<span>A</span>
            BOOM
          </a>
        </div>
        <div className="collapse navbar-collapse" id="navbar-mobile">
          <NavigationItems />
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
