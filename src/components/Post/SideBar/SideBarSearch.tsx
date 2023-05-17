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
            className="btn btn-primary bg-primary border-primary border-solid border text-white h-11 w-11 hover:bg-primary"
            type="button"
            onClick={onClick}
          />
          {/* <span className="glyphicon glyphicon-search" /> */}
        </span>
        <input
          className="form-control border border-solid border-gray-300 h-11 text-align-right hover:border-gray-200"
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
