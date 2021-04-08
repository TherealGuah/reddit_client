import { createSlice } from '@reduxjs/toolkit';

const options = {
    name: "subReddits",
    initialState: {
        subRedditsList: [],
        subReddit: "/r/Home",
    },
    reducers: {
        addSubReddit: (state, action) => state.subReddits.push(action.payload),

        changeSelectedSubReddit: (state, action) => state.selectedSubReddit = action.payload,
    },
};

export const subRedditsSlice = createSlice(options);
// actions
export const { addSubReddit, changeSelectedSubReddit } = subRedditsSlice.actions;
// selectors
export const selectSubRedditsList = state => state.subReddits.subRedditsList;
export const selectSubReddit = state => state.subReddits.subReddit;
// reducers
export default subRedditsSlice.reducer;