import axios from 'axios';

export const checkConnectionToProxy = async (address) => {
  const extension = '/healtcheck';
  const fullAddress = address + extension;

  return axios
    .get(fullAddress, {
      timeout: 2000,
    })
    .then(function (response) {
      console.log('AXIOS Success: ', response);
      return true;
    })
    .catch(function (error) {
      console.log('AXIOS Error: ', error);
      return false;
    })
    .finally(() => {
      return false;
    });
};

export const checkConnectionRegistry = async (proxyAddress, registryAddress) => {
  const fullRegistryAddress = `${registryAddress}/v2/_catalog`
  const registryExtensionAsBase64 = window.btoa(fullRegistryAddress);
  const fullAddress = `${proxyAddress}/passOn/${registryExtensionAsBase64}`;

  return axios
    .get(fullAddress, {
      timeout: 2000,
    })
    .then(function (response) {
      console.log('AXIOS Success: ', response);
      return true;
    })
    .catch(function (error) {
      console.log('AXIOS Error: ', error);
      return false;
    })
    .finally(() => {
      return false;
    });
};
