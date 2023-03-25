import React from "react";
import Profile from "./profiles/Profile";
import Post from "./profiles/Post";
import Gallery from "./profiles/Gallery";
import Todo from "./profiles/Todo";
const Sidebar = () => {
  return (
    <div>
      <Profile />
      <Post />
      <Gallery />
      <Todo />
    </div>
  );
};

export default Sidebar;
