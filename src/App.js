import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./profiles/Profile";
import Post from "./profiles/Post";
import Gallery from "./profiles/Gallery";
import Todo from "./profiles/Todo";
// import SingleUser from "./data/SingleUser";
import UserData from "./data/UserData";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserData />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/post" element={<Post />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </Router>
  );
};

export default App;
