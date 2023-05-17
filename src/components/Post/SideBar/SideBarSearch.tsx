"use client";

import React from "react";
import { useRouter } from "next/navigation";

const SideBarSearch = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const { push } = useRouter();

  const onClick = () => {
    console.log("clicked");
  };

  const handleInputChange = (e: any) => {
    const { value } = e.target;
    setSearchQuery(value);
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div className="mb-12">
      <div className="input-group">
        <span className="input-group-btn">
          <input
            className="btn btn-primary h-11 w-11 border border-solid border-primary bg-primary text-white hover:bg-primary"
            type="button"
            onClick={onClick}
          />
          {/* <span className="glyphicon glyphicon-search" /> */}
        </span>
        <input
          className="form-control h-11 border border-solid border-gray-300 text-align-right hover:border-gray-200"
          type="text"
          placeholder="חיפוש"
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
      </div>
    </div>
  );
};

export default SideBarSearch;
