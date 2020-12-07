import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { green, red } from '@material-ui/core/colors';
import {
  selectProxyUrl,
  selectRegistryUrl,
} from '../../redux/slices/addressSlice';
import { Button, TextField } from '@material-ui/core';

import strings from '../../localization/strings';
import { makeStyles } from '@material-ui/core/styles';
import {
  checkConnectionToProxy,
  checkConnectionRegistry,
} from './../../services/connectionChecker';

const AddressChanger = (props) => {
  const proxyAddress = useSelector(selectRegistryUrl);
  const registryAddress = useSelector(selectProxyUrl);

  const [proxyAddressInput, setProxyAddress] = useState(
    'http://192.168.0.133:2999'
  );

  const [registryAddressInput, setRegistryAddress] = useState(
    'http://192.168.0.133:9997'
  );


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
    },
  ];

  return (
    <div>
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
                  >
                    {strings.ADDRESS.SAVE}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        );
      })}
    </div>
  );
};

export default AddressChanger;
