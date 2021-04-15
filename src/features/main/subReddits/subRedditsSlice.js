import { createSlice } from '@reduxjs/toolkit';

const options = {
    name: "subReddits",
    initialState: {
        subReddits: [],
        selectedSubReddit: "/r/Home",
    },
    reducers: {
        addSubReddit: (state, action) => {
            state.subReddits.push(action.payload);
        },
        changeSelectedSubReddit: (state, action) => {
            state.selectedSubReddit = action.payload;
        },
    },
};

export const subRedditsSlice = createSlice(options);
// actions
export const { addSubReddit, changeSelectedSubReddit } = subRedditsSlice.actions;
// selectors
export const selectSubReddits = state => state.subReddits.subReddits;
export const selectSubReddit = state => state.subReddits.selectedSubReddit;
// reducers
export default subRedditsSlice.reducer;