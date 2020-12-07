import { createSlice } from '@reduxjs/toolkit';

export const addressSlice = createSlice({
  name: 'address',
  initialState: {
    proxyUrl: 'http://192.168.0.133:2999',
    registryUrl: 'http://192.168.0.133:9997',
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

export const selectProxyUrl = (state) => state.address.proxyUrl;
export const selectRegistryUrl = (state) => state.address.registryUrl;

export default addressSlice.reducer;
