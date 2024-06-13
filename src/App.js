import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import EditPostPage from "./pages/EditPostPage";
import AddPostPage from "./pages/AddPostPage";
import "./App.css";

const App = () => {
  return (
    <div>
      <div class="header-container-wrapper">
        <div class="blog-post-container">
          <h2>Blog Post</h2>
        </div>
      </div>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:postId" element={<PostPage />} />
          <Route path="/edit/:postId" element={<EditPostPage />} />
          <Route path="/add" element={<AddPostPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
