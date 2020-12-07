import { createSlice } from '@reduxjs/toolkit';

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    catalog: ['a', 'b', 'c']
  },
  reducers: {
  },
});

export const {

} = catalogSlice.actions;

export const selectCatalog = (state) => state.catalog.catalog;

export default catalogSlice.reducer;
