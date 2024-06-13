import { createSlice } from '@reduxjs/toolkit';

const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    posts: [],
    currentPost: null
  },
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    editPost: (state, action) => {
      const index = state.posts.findIndex(post => post.id === action.payload.id);
      if (index !== -1) {
        state.posts[index] = action.payload;
      }
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter(post => post.id !== action.payload);
    },
    likePost: (state, action) => {
      const index = state.posts.findIndex(post => post.id === action.payload);
      if (index !== -1) {
        state.posts[index].likes = (state.posts[index].likes || 0) + 1;
      }
    },
    setCurrentPost: (state, action) => {
      state.currentPost = action.payload;
    }
  }
});

export const { addPost, editPost, deletePost, likePost, setCurrentPost } = blogSlice.actions;

export default blogSlice.reducer;
