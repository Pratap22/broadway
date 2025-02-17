import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    loading: false,
  },
  reducers: {
    posts: (state, action) => {
      state.posts = action.payload;
    },
    loading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { posts, loading } = postSlice.actions;

export const fetchPosts = () => async (dispatch) => {
  try {
    dispatch(loading(true));
    const response = await axios.get(
      "http://jsonplaceholder.typicode.com/posts"
    );
    dispatch(posts(response.data));
    dispatch(loading(false));
  } catch (error) {
    dispatch(loading(false));
    console.error(error);
  }
};

export default postSlice.reducer;
