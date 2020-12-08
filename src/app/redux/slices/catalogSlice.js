import { createSlice } from '@reduxjs/toolkit';

import axios from 'axios';

import { combine } from '../../services/addressCombiner';

import { selectProxyUrl, selectRegistryUrl } from './addressSlice';

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    catalog: [],
    imageTagsList: {},
  },
  reducers: {
    updateCatalog: (state, action) => {
      state.catalog = action.payload;
    },
    updateImageTagsList: (state, action) => {
      state.imageTagsList = action.payload;
    },
    clearImageTagsList: (state) => {
      state.imageTagsList = {};
    },
  },
});

export const {
  updateCatalog,
  updateImageTagsList,
  clearImageTagsList,
} = catalogSlice.actions;

export const requestCatalogUpdate = () => (dispatch, getState) => {
  const proxyAddress = getState().address.proxyUrl;
  const registryAddress = getState().address.registryUrl;
  const endpoint = '/v2/_catalog';
  const combinedAddress = combine(proxyAddress, registryAddress, endpoint);
  axios
    .get(combinedAddress)
    .then((response) => {
      const catalog = response.data.repositories;
      dispatch(updateCatalog(catalog));
    })
    .catch((error) => console.log(error));
};

export const requestImageTagsList = (image) => (dispatch, getState) => {
  const proxyAddress = getState().address.proxyUrl;
  const registryAddress = getState().address.registryUrl;
  const endpoint = `/v2/${image}/tags/list`;
  const combinedAddress = combine(proxyAddress, registryAddress, endpoint);
  axios
    .get(combinedAddress)
    .then((response) => {
      const imageTagsList = response.data;
      dispatch(updateImageTagsList(imageTagsList));
    })
    .catch((error) => console.log(error));
};

export const selectCatalog = (state) => state.catalog.catalog;
export const selectImageDetails = (state) => state.catalog.imageDetails;

export default catalogSlice.reducer;
