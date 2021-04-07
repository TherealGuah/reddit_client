import { createSlice } from '@reduxjs/toolkit';

const options = {
    name: 'search',
    initialState: "",
    reducers: {
        searchFor: (state, action) => state = action.payload,
    },
};

export const searchSlice = createSlice(options);
export const selectSearch = state => state.search;
export const { searchFor } = searchSlice.actions;
export default searchSlice.reducer;