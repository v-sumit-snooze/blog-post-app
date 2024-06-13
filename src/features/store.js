// src/features/store.js
import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './blogs/blogSlice';

const store = configureStore({
  reducer: {
    blog: blogReducer,
  },
});

export default store;
