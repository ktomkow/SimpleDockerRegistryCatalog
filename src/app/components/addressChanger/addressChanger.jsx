import { Container, Grid } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button, TextField } from '@material-ui/core';

import {
  selectProxyUrl,
  selectRegistryUrl,
  updateProxyAddress,
  updateRegistryAddress
} from '../../redux/slices/addressSlice';

import {
  checkConnectionToProxy,
  checkConnectionRegistry,
} from './../../services/connectionChecker';

import strings from '../../localization/strings';

const AddressChanger = (props) => {
  const dispatch = useDispatch();
  const proxyAddress = useSelector(selectProxyUrl);
  const registryAddress = useSelector(selectRegistryUrl);

  const [proxyAddressInput, setProxyAddress] = useState('');
  const [registryAddressInput, setRegistryAddress] = useState('');

  useEffect(() => {
    setProxyAddress(proxyAddress);
    setRegistryAddress(registryAddress);

  }, []);

  const [isProxyAddressCorrect, setProxyAddressCorrectness] = useState(null);
  const [isRegistryAddressCorrect, setRegistryAddressCorrectness] = useState(
    null
  );

  const checkProxyConnection = async () => {
    const isCorrect = await checkConnectionToProxy(proxyAddressInput);
    setProxyAddressCorrectness(isCorrect);
  };

  const checkRegistryConnection = async () => {
    const isCorrect = await checkConnectionRegistry(
      proxyAddressInput,
      registryAddressInput
    );
    setRegistryAddressCorrectness(isCorrect);
  };

  const addresses = [
    {
      label: strings.ADDRESS.PROXY_ADDRESS,
      isCorrect: isProxyAddressCorrect,
      value: proxyAddressInput,
      handleChange: (e) => {
        setProxyAddress(e.target.value);
      },
      checkConnection: () => {
        checkProxyConnection();
      },
      saveAddress: () => {
        dispatch(updateProxyAddress(proxyAddressInput));
      }
    },
    {
      label: strings.ADDRESS.REGISTRY_ADDRESS,
      isCorrect: isRegistryAddressCorrect,
      value: registryAddressInput,
      handleChange: (e) => {
        setRegistryAddress(e.target.value);
      },
      checkConnection: () => {
        checkRegistryConnection();
      },
      saveAddress: () => {
        dispatch(updateRegistryAddress(registryAddressInput));
      }
    },
  ];

  return (
    <Container>
      {addresses.map((element, index) => {
        return (
          <form autoComplete='on' key={index} noValidate>
            <Grid
              container
              spacing={1}
              direction='row'
              justify='center'
              alignItems='center'
              style={{ margin: '2em' }}
            >
              <Grid item>
                <TextField
                  error={element.isCorrect === false}
                  id={`address-input-${index}`}
                  label={element.label}
                  variant='outlined'
                  value={element.value}
                  onChange={element.handleChange}
                  autoComplete='url'
                  type='url'
                />
              </Grid>
              <Grid
                item
                container
                direction='row'
                justify='center'
                alignItems='center'
              >
                <Grid item>
                  <Button onClick={element.checkConnection}>
                    {strings.ADDRESS.CHECK_CONNECTION}
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    disabled={!(element.isCorrect === true)}
                    type='submit'
                    onClick={element.saveAddress}
                  >
                    {strings.ADDRESS.SAVE}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        );
      })}
    </Container>
  );
};

export default AddressChanger;
