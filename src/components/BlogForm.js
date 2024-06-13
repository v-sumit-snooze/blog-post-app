import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, editPost } from '../features/blog/blogSlice';

const BlogForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const currentPost = useSelector(state => state.blog.currentPost);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentPost) {
      dispatch(editPost({ ...currentPost, title, content }));
    } else {
      dispatch(addPost({ id: Date.now(), title, content }));
    }
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">{currentPost ? 'Edit' : 'Add'} Post</button>
    </form>
  );
};

export default BlogForm;
