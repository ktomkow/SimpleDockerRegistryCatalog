import axios from 'axios';

export const checkConnectionToProxy = async (address) => {
  const extension = '/healtcheck';
  const fullAddress = address + extension;
  console.log('Address: ', fullAddress);

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
