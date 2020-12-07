import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Tabs,
  Tab,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/styles';

import { Link } from 'react-router-dom';

import strings from '../../localization/strings';

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
  },
  topBarNavButton: {
    paddingRight: '2em',
    paddingLeft: '2em',
  },
}));
const MyNavbar = () => {
  const classes = useStyles();
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography className={classes.typographyStyles} variant='h4'>
          {strings.APP_NAME}
        </Typography>
        <Button
          component={Link}
          to='/'
          color='secondary'
          className={classes.topBarNavButton}
        >
          {strings.NAVBAR.HOME}
        </Button>
        <Button
          component={Link}
          to='/address'
          color='secondary'
          className={classes.topBarNavButton}
        >
          {strings.NAVBAR.ADDRESS}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default MyNavbar;
