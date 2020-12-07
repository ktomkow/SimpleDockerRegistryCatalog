import { createSlice } from '@reduxjs/toolkit';

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    catalog: ['a', 'b', 'c']
  },
  reducers: {
    requestCatalogUpdate: (state) => {
      state.catalog = ['e','f']
    }
  },
});

export const {
  requestCatalogUpdate
} = catalogSlice.actions;

export const selectCatalog = (state) => state.catalog.catalog;

export default catalogSlice.reducer;
