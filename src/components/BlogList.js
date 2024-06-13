import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import StyleContext from '../Context/StyleContext';

const BlogList = () => {
  const posts = useSelector(state => state.blog.posts);
  const value = useContext(StyleContext);

  return (
    <div>
      {posts.map(post => (
        <div class="card" style={value} key={post.id}>
        <div class="card-body">
          <h3 class="card-title">{post.title}</h3>
          <p class="card-text">{post.content.substring(0, 100)}...</p>
          <Link to={`/post/${post.id}`}>
            <button type="button" class="btn btn-secondary">View</button>
          </Link>
        </div>
      </div>
      ))}
    </div>
  );
};

export default BlogList;
