import { configureStore } from '@reduxjs/toolkit';
import toggleThemeSlice from '../features/header/toggleTheme/toggleSlice';
import searchBarSlice from '../features/header/searchBar/searchSlice';
import subRedditsSice from '../features/main/subReddits/subRedditsSlice';

export default configureStore({
  reducer: {
    toggle: toggleThemeSlice,
    search: searchBarSlice,
    subReddits: subRedditsSice,
    // postsList: ,
    // post: ,
  },
});
