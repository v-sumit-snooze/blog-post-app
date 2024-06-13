import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { editPost } from '../features/blogs/blogSlice';

const EditPostPage = () => {
  const { postId } = useParams();
  const post = useSelector(state => state.blog.posts.find(post => post.id === parseInt(postId)));
  const [title, setTitle] = useState(post ? post.title : '');
  const [content, setContent] = useState(post ? post.content : '');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    }
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editPost({ id: post.id, title, content }));
    navigate('/');
  };

  return (
    <div className='card'>
      <div class="card-header">
        <h4>Edit Post</h4>
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
        <button type="submit" class="btn btn-success">Save</button>
      </form>
    </div>
  );
};

export default EditPostPage;
