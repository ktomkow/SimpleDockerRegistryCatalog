import { createSlice } from '@reduxjs/toolkit';

import strings from '../../localization/strings';

export const languageSlice = createSlice({
  name: 'language',
  initialState: {
    availableLanguages: ['eng', 'pl'],
    currentLanguage: '',
  },
  reducers: {
    initialLanguageSet: (state, action) => {
      state.currentLanguage = action.payload;
    },
    switchLanguage: (state, action) => {
      const newLanguage = action.payload;
      if (state.availableLanguages.some((x) => x === newLanguage)) {
        state.currentLanguage = newLanguage;
        strings.setLanguage(newLanguage);
      }
    },
  },
});

export const { initialLanguageSet, switchLanguage } = languageSlice.actions;

export const availableLanguages = (state) => state.language.availableThemes;
export const currentLanguage = (state) => state.language.currentLanguage;

export default languageSlice.reducer;
