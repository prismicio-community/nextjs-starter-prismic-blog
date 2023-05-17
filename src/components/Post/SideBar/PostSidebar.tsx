import React from "react"

import SideBarCategories from "./SideBarCategories"
import SideBarLatest from "./SideBarLatest"
import SideBarSearch from "./SideBarSearch"
import SideBarTagCloud from "./SideBarTagCloud"

const PostSidebar = () => (
  <div className="col-md-3 col-sm-12">
    <div className="sidebar">
      <SideBarSearch />
      {/* <SideBarLatest />
      <SideBarCategories />
      <SideBarTagCloud tags={[]} /> */}
    </div>
  </div>
)

export default PostSidebar
