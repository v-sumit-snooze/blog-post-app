import React from "react";
import BlogList from "../components/BlogList";
import { Link } from "react-router-dom";
import StyleContext from "../Context/StyleContext";

const HomePage = () => {
  const styleMarginTop = { marginTop: "20px" };
  return (
    <div>
      <Link to="/add">
        <button type="button" class="btn btn-info">
          Add New Post
        </button>
      </Link>
      <StyleContext.Provider value={styleMarginTop}>
        <BlogList />
      </StyleContext.Provider>
    </div>
  );
};

export default HomePage;
