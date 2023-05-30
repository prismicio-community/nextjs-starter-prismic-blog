import React from "react";

import SideBarCategories from "./SideBarCategories";
import SideBarLatest from "./SideBarLatest";
import SideBarSearch from "./SideBarSearch";
import SideBarTagCloud from "./SideBarTagCloud";

const PostSidebar = () => (
  <>
    <SideBarSearch />
    {/* @ts-expect-error Async Server Component */}
    <SideBarLatest />
    {/* <SideBarCategories /> */}
    {/* <SideBarTagCloud tags={[]} /> */}
  </>
);

export default PostSidebar;
