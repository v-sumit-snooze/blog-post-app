import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../features/blogs/blogSlice';
import { useNavigate, Link } from 'react-router-dom';

const AddPostPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost({ id: Date.now(), title, content }));
    setTitle('');
    setContent('');
    navigate('/');
  };

  return (
    <div className='card'>
      <div class="card-header">
        <h4>Add New Post</h4>
      </div>

      <form onSubmit={handleSubmit} className='card-body'>
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
        <button type="submit" class="btn btn-success">Submit</button>
        <Link to="/">
        <button type="button" class="btn btn-dark">Cancel</button>
      </Link>
      </form>
    </div>
  );
};

export default AddPostPage;
