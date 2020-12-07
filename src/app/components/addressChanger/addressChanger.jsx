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

const useStyles = makeStyles((theme) => ({
  root: {},
  validColor: {
    color: green,
  },
  invalidColor: {
    color: red,
  },
}));

const AddressChanger = (props) => {
  const classes = useStyles();
  const registryAddress = useSelector(selectProxyUrl);
  const proxyAddress = useSelector(selectRegistryUrl);

  const [registryAddressInput, setRegistryAddress] = useState(
    'http://192.168.0.133:9997'
  );
  const [proxyAddressInput, setProxyAddress] = useState(
    'http://192.168.0.133:2999'
  );

  const [isAddressCorrect, setAddressCorrectness] = useState(null);
  const [isProxyAddressCorrect, setProxyAddressCorrectness] = useState(null);
  const [isRegistryAddressCorrect, setRegistryAddressCorrectness] = useState(
    null
  );

  const checkProxyConnection = async () => {
    const isCorrect = await checkConnectionToProxy(proxyAddressInput);
    console.log(`PROXY CONNECTION CORRECT: ${isCorrect}`);
    setProxyAddressCorrectness(isCorrect);
  };

  const checkRegistryConnection = async () => {
    const isCorrect = await checkConnectionRegistry(
      proxyAddressInput,
      registryAddressInput
    );
    console.log(`REGISTRY CONNECTION CORRECT: ${isCorrect}`);
  };

  const handleChange = (e) => {
    setProxyAddress(e.target.value);
  };

  const getInputCorrectnessCss = (flag) => {
    console.log('dupa');
    switch (flag) {
      case true:
        return classes.validColor;
      case false:
        return '';
      default:
        return '';
    }
  };

  const addresses = [
    {
      label: strings.ADDRESS.PROXY_ADDRESS,
      handleChange: (e) => {
        setProxyAddress(e.target.value);
      },
      checkConnection: () => {
        checkProxyConnection();
      },
      inputClasses: () => {
        return getInputCorrectnessCss(isProxyAddressCorrect);
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
                  error={isProxyAddressCorrect === false}
                  id={`address-input-${index}`}
                  label={element.label}
                  variant='outlined'
                  value={proxyAddressInput}
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
                    disabled={!(isProxyAddressCorrect === true)}
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
