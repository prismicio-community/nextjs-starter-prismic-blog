"use client";

import React from "react";
import SearchIcon from "@/src/assets/SearchIcon";
// import { useRouter } from "next/navigation";
import { Search } from "@material-ui/icons";

const SideBarSearch = () => {
  // const [searchQuery, setSearchQuery] = React.useState("");
  // const { push } = useRouter();

  // const onClick = () => {
  //   console.log("clicked");
  // };

  // const handleInputChange = (e: any) => {
  //   const { value } = e.target;
  //   setSearchQuery(value);
  // };

  // const handleKeyPress = (e: any) => {
  //   if (e.key === "Enter") {
  //     onClick();
  //   }
  // };

  return (
    <div className="flex">
      <button
        className="h-11 w-11 border border-solid border-primary bg-primary text-white transition-all duration-500 flex-center hover:brightness-95"
        type="button"
        // onClick={onClick}
      >
        <SearchIcon />
      </button>
      <input
        className="border border-gray-300 px-3 py-2 outline-none text-align-right"
        type="text"
        placeholder="חיפוש"
        // onChange={handleInputChange}
        // onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default SideBarSearch;
