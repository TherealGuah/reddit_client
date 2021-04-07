import { configureStore } from '@reduxjs/toolkit';
import toggleThemeSlice from '../features/header/toggleTheme/toggleSlice';

export default configureStore({
  reducer: {
    toggle: toggleThemeSlice,
  },
});
