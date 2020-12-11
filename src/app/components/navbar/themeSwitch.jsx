import React from 'react';
import Switch from '@material-ui/core/Switch';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import { Box, Grid, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { currentTheme, switchTheme } from '../../redux/slices/themeSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: '1em',
    marginRight: '1em',
  },
  icon: { color: theme.palette.primary.dark },
  switch: {
    color: theme.palette.primary.dark
  },
}));

const ThemeSwitch = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const currentlyEnabledTheme = useSelector(currentTheme);

  const useLight = () => {
    dispatch(switchTheme('ligth'));
  };

  const useDark = () => {
    dispatch(switchTheme('dark'));
  };

  return (
    <Box className={classes.root}>
      <Grid
        container
        spacing={0}
        direction='row'
        justify='center'
        alignItems='center'
      >
        <Grid item>
          <IconButton>
            <Brightness7Icon className={classes.icon} onClick={useLight}/>
          </IconButton>
        </Grid>
        <Grid item>
          <Switch
            className={classes.switch}
            checked={currentlyEnabledTheme.name === 'dark'}
          />
        </Grid>
        <Grid item>
          <IconButton>
            <Brightness3Icon className={classes.icon} onClick={useDark}/>
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ThemeSwitch;
