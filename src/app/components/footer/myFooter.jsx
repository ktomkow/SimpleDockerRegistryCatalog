import { AppBar, Grid, Toolbar, Typography } from '@material-ui/core';

import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import HelpIcon from '@material-ui/icons/Help';

import { useSelector } from 'react-redux';

import {
  selectProxyUrl,
  selectRegistryUrl,
} from '../../redux/slices/addressSlice';

import {
  checkConnectionToProxy,
  checkConnectionRegistry,
} from './../../services/connectionChecker';

import strings from './../../localization/strings';

const useStyles = makeStyles((theme) => ({
  footer: {
    top: 'auto',
    bottom: 0,
  },
  successColor: {
    color: theme.palette.success.main,
  },
  failColor: {
    color: theme.palette.error.main,
  },
}));

const MyFooter = () => {
  const classes = useStyles();
  const proxyAddress = useSelector(selectProxyUrl);
  const registryAddress = useSelector(selectRegistryUrl);

  const [isProxyAddressCorrect, setProxyAddressCorrectness] = useState(null);
  const [isRegistryAddressCorrect, setRegistryAddressCorrectness] = useState(
    null
  );

  useEffect(() => {
    checkProxyConnection();
    checkRegistryConnection();

    setInterval(() => {
      checkProxyConnection();
      checkRegistryConnection();
    }, 10000);
  }, []);

  const checkProxyConnection = async () => {
    let isCorrect = await checkConnectionToProxy(proxyAddress);
    setProxyAddressCorrectness(isCorrect);
  };

  const checkRegistryConnection = async () => {
    const isCorrect = await checkConnectionRegistry(
      proxyAddress,
      registryAddress
    );

    setRegistryAddressCorrectness(isCorrect);
  };

  const Foo = ({ label, address, isSuccess }) => {
    return (
      <Grid
        container
        spacing={0}
        direction='row'
        justify='center'
        alignItems='center'
      >
        <Grid item>
          {(isSuccess === undefined || isSuccess === null) && <HelpIcon />}
          {isSuccess === false && (
            <HighlightOffIcon className={classes.failColor} />
          )}
          {isSuccess === true && (
            <RadioButtonCheckedIcon className={classes.successColor} />
          )}
        </Grid>
        <Grid item>
          <Typography>
            {label}: {address}
          </Typography>
        </Grid>
      </Grid>
    );
  };

  const config = [
    {
      label: strings.ADDRESS.PROXY_ADDRESS,
      address: proxyAddress,
      isSuccess: isProxyAddressCorrect,
    },
    {
      label: strings.ADDRESS.REGISTRY_ADDRESS,
      address: registryAddress,
      isSuccess: isRegistryAddressCorrect,
    },
  ];

  return (
    <AppBar position='fixed' className={classes.footer}>
      <Toolbar>
        {config.map((element, index) => {
          return (
            <Foo
              key={index}
              label={element.label}
              address={element.address}
              isSuccess={element.isSuccess}
            />
          );
        })}
      </Toolbar>
    </AppBar>
  );
};

export default MyFooter;
