export const combine = (proxyAddress, registryAddress, endpoint) => {
  const fullRegistryAddress = `${registryAddress}/${endpoint}`;
  return _combine(proxyAddress, fullRegistryAddress);

};

export const combineWithParameter = (proxyAddress, registryAddress, endpoint, parameter) => {
  const fullRegistryAddress = `${registryAddress}/${endpoint}/${parameter}`;
  return _combine(proxyAddress, fullRegistryAddress);
};

const _combine = (proxyAddress, parametrizedRegistryAddress) => {
  const registryExtensionAsBase64 = window.btoa(parametrizedRegistryAddress);
  const fullAddress = `${proxyAddress}/passOn/${registryExtensionAsBase64}`;
  
  return fullAddress;
}