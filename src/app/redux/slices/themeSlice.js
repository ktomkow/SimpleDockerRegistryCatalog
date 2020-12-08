import { createSlice } from '@reduxjs/toolkit';
import { theme, darkTheme } from '../../themes/theme';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    availableThemes: ['light', 'dark'],
    currentTheme: 'dark',
  },
  reducers: {
    switchTheme: (state, action) => {
      state.currentTheme = action.payload;
    },
  },
});

export const { switchTheme } = themeSlice.actions;

export const availableThemes = (state) => state.theme.availableThemes;
export const currentTheme = (state) => {
  switch (state.theme.currentTheme) {
    case 'light':
      return { theme: theme, name: state.theme.currentTheme };
    case 'dark':
      return { theme: darkTheme, name: state.theme.currentTheme };
    default:
      return { theme: theme, name: state.theme.currentTheme };
  }
};

export default themeSlice.reducer;
