"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Search } from "@material-ui/icons";

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
    <div className="">
      <div className="">
        <input
          className="relative h-11 w-11 border border-solid border-primary bg-primary text-white hover:bg-primary"
          type="button"
          onClick={onClick}
        />
        <Search className="absolute text-white" />
        <input
          className="border border-gray-300 px-3 py-2 text-align-right"
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
