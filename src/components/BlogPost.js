import React from 'react';
import { useSelector } from 'react-redux';

const BlogPost = () => {
  const currentPost = useSelector(state => state.blog.currentPost);

  if (!currentPost) {
    return <div>Select a post to view details</div>;
  }

  return (
    <div>
      <h2>{currentPost.title}</h2>
      <p>{currentPost.content}</p>
    </div>
  );
};

export default BlogPost;
