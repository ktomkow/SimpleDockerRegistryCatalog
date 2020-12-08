import { Container, Grid, Paper } from '@material-ui/core';
import React from 'react';

import ImagesList from './imagesList';

import { makeStyles } from '@material-ui/core/styles';
import ImageTags from './imageTags';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2em',
  },
  listPaper: {
    width: '100%',
    maxWidth: '30em',
    backgroundColor: theme.palette.background.paper,
  },
}));

const Catalog = (props) => {
  const classes = useStyles();

  const CatalogPaper = (props) => {
    return (
      <Paper className={props.className} elevation={6}>
        {props.children}
      </Paper>
    );
  };

  return (
    <Container className={classes.root}>
      <Grid
        container
        spacing={1}
        direction='row'
        justify='space-evenly'
        alignItems='flex-start'
      >
        <CatalogPaper className={classes.listPaper}>
          <ImagesList />
        </CatalogPaper>
        <CatalogPaper className={classes.listPaper}>
          <ImageTags />
        </CatalogPaper>
      </Grid>
    </Container>
  );
};

export default Catalog;
