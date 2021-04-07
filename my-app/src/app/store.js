import { configureStore } from '@reduxjs/toolkit';
import toggleThemeSlice from '../features/header/toggleTheme/toggleSlice';
import searchBarSlice from '../features/header/searchBar/searchSlice';


export default configureStore({
  reducer: {
    toggle: toggleThemeSlice,
    search: searchBarSlice,
  },
});
