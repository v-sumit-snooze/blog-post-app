import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deletePost, likePost } from "../features/blogs/blogSlice";

const PostPage = () => {
  const { postId } = useParams();
  const post = useSelector((state) =>
    state.blog.posts.find((post) => post.id === parseInt(postId))
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePostDelete = (post) => {
    dispatch(deletePost(post.id));
    navigate("/");
  };

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="card">
      <div class="card-body">
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <button type="button" class="btn btn-danger" onClick={() => handlePostDelete(post)}>Delete</button>
        <button type="button" class="btn btn-secondary" onClick={() => dispatch(likePost(post.id))}>
          Like ({post.likes || 0})
        </button>
        <Link to={`/edit/${post.id}`}>
          <button type="button" class="btn btn-success">Edit Post</button>
        </Link>
        <Link to="/">
          <button type="button" class="btn btn-dark">Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default PostPage;
