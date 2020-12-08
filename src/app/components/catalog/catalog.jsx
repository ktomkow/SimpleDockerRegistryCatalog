import { Container, Grid } from '@material-ui/core';
import React from 'react';

import ImagesList from './imagesList';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2em',
  },
}));

const Catalog = (props) => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid
        container
        spacing={1}
        direction='row'
        justify='space-evenly'
        alignItems='center'
      >
        <Grid item container>
          <ImagesList />
        </Grid>
        <Grid item container></Grid>
      </Grid>
    </Container>
  );
};

export default Catalog;
