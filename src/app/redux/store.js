import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux/slices/counterSlice';
import themeReducer from '../redux/slices/themeSlice';
import languageReducer from '../redux/slices/languageSlice';
import addressReducer from '../redux/slices/addressSlice'
import catalogReducer from '../redux/slices/catalogSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
    language: languageReducer,
    address: addressReducer,
    catalog: catalogReducer
  },
});
