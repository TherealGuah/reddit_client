import { configureStore } from '@reduxjs/toolkit';
import toggleThemeSlice from '../features/header/toggleTheme/toggleSlice';
import searchBarSlice from '../features/header/searchBar/searchSlice';
import subRedditsSlice from '../features/main/subReddits/subRedditsSlice';
import postsSlice from '../features/main/posts/postsSlice';
import commentsSlice from '../features/main/posts/comments/commentsSlice';
import postSlice from '../features/main/posts/post/postSlice';
export default configureStore({
  reducer: {
    toggle: toggleThemeSlice,
    search: searchBarSlice,
    subReddits: subRedditsSlice,
    posts: postsSlice,
    comments: commentsSlice,
    post: postSlice,
  },
});
