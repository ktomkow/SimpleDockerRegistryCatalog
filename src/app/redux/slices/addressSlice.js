import { createSlice } from '@reduxjs/toolkit';

export const addressSlice = createSlice({
  name: 'address',
  initialState: {
    proxyUrl: '192.168.0.133:2229',
    registryUrl: '172.17.0.1:9997',
  },
  reducers: {
    updateProxyAddress: (state, action) => {
      const url = action.payload;
      state.proxyUrl = url;
    },
    updateRegistryAddress: (state, action) => {
      const url = action.payload;
      state.registryUrl = url;
    },
  },
});

export const {
  updateProxyAddress,
  updateRegistryAddress,
} = addressSlice.actions;

export const selectProxyUrl = (state) => state.address.url;
export const selectRegistryUrl = (state) => state.address.url;

export default addressSlice.reducer;
