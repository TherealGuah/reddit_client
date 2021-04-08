import  { createSlice } from '@reduxjs/toolkit';

const options = {
    name: 'posts',
    initialState: [],
    reducers: {
        addPosts: (state, action) => state= action.payload,
    },
};

export const postsSlice = createSlice(options);
// actions
export const { addPosts } = postsSlice.actions;
// selectors
export const selectPosts = state => state.posts;
//reducer
export default postsSlice.reducer;