import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectProxyUrl,
  selectRegistryUrl,
} from '../../redux/slices/addressSlice';
import { Button, TextField } from '@material-ui/core';

import strings from '../../localization/strings';
import { makeStyles } from '@material-ui/core/styles';
import { checkConnectionToProxy, checkConnectionRegistry } from './../../services/connectionChecker';

const useStyles = makeStyles((theme) => ({
  root: {},
  validColor: {
    color: 'green',
  },
  invalidColor: {
    color: 'red',
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

  const checkProxyConnection = async () => {
    const isCorrect = await checkConnectionToProxy(proxyAddressInput);
    console.log(`PROXY CONNECTION CORRECT: ${isCorrect}`);
  };

  const checkRegistryConnection = async () => {
    const isCorrect = await checkConnectionRegistry(proxyAddressInput, registryAddressInput);
    console.log(`REGISTRY CONNECTION CORRECT: ${isCorrect}`);
  };

  const handleChange = (e) => {
    setProxyAddress(e.target.value);
  };

  return (
    <div>
      <Grid
      container
      spacing={1}
      direction='row'
      justify='center'
      alignItems='center'
      style={{ margin: '2em' }}
    >
      <Grid item>
        <form autoComplete='off'>
          <TextField
            error={isAddressCorrect === false}
            id='address-input'
            label='Outlined'
            variant='outlined'
            value={proxyAddressInput}
            onChange={handleChange}
          />
        </form>
      </Grid>
      <Grid item container direction='row' justify='center' alignItems='center'>
        <Grid item>
          <Button onClick={checkProxyConnection}>
            {strings.ADDRESS.CHECK_CONNECTION}
          </Button>
        </Grid>
        <Grid item>
          <Button disabled={!(isAddressCorrect === true)}>
            {strings.ADDRESS.SAVE}
          </Button>
        </Grid>
      </Grid>
    </Grid>

    <Grid
      container
      spacing={1}
      direction='row'
      justify='center'
      alignItems='center'
      style={{ margin: '2em' }}
    >
      <Grid item>
        <form autoComplete='off'>
          <TextField
            error={isAddressCorrect === false}
            id='address-input'
            label='Outlined'
            variant='outlined'
            value={registryAddressInput}
            onChange={handleChange}
          />
        </form>
      </Grid>
      <Grid item container direction='row' justify='center' alignItems='center'>
        <Grid item>
          <Button onClick={checkRegistryConnection}>
            {strings.ADDRESS.CHECK_CONNECTION}
          </Button>
        </Grid>
        <Grid item>
          <Button disabled={!(isAddressCorrect === true)}>
            {strings.ADDRESS.SAVE}
          </Button>
        </Grid>
      </Grid>
    </Grid>
    </div>
    
  );
};

export default AddressChanger;
