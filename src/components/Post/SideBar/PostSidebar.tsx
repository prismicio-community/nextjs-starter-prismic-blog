import React from "react";
import SideBarSearch from "./SideBarSearch";
import SideBarLatest from "./SideBarLatest";
import SideBarCategories from "./SideBarCategories";
import SideBarTagCloud from "./SideBarTagCloud";

const PostSidebar = () => (
  <div className="col-md-3 col-sm-12">
    <div className="sidebar">
      <SideBarSearch />
      <SideBarLatest />
      <SideBarCategories />
      <SideBarTagCloud tags={[]} />
    </div>
  </div>
);

export default PostSidebar;
