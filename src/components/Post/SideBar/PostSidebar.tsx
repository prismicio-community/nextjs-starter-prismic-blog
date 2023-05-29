import React from "react";

import SideBarCategories from "./SideBarCategories";
import SideBarLatest from "./SideBarLatest";
import SideBarSearch from "./SideBarSearch";
import SideBarTagCloud from "./SideBarTagCloud";

const PostSidebar = () => (
  <div className="flex flex-col items-end justify-start sm:w-full md:flex-[1]">
    <SideBarSearch />
    {/* <SideBarLatest />
      <SideBarCategories />
      <SideBarTagCloud tags={[]} /> */}
  </div>
);

export default PostSidebar;
