import { createSlice } from '@reduxjs/toolkit';

const options = {
    name: "comments",
    initialState:[],
    reducer: {
        addComments: (state, action) => state = action.payload,
    },
};

export const commentsSlice = createSlice(options);
// selecctor
export const selectComments = state => state.comments;
// actions
export const { addComments } = commentsSlice.actions;
// reducers
export default commentsSlice.reducer; 