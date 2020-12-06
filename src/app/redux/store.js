import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux/slices/counterSlice';
import themeReducer from '../redux/slices/themeSlice';
import languageReducer from '../redux/slices/languageSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
    language: languageReducer,
  },
});
