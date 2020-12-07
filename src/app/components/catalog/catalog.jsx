import {
  Container,
  Grid,
  List,
  ListItem,
  Paper,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCatalog } from './../../redux/slices/catalogSlice';
import { makeStyles } from '@material-ui/core/styles';

import strings from '../../localization/strings';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2em',
  },
  title: { padding: '0.4em' },
  listPaper: {
    width: '100%',
    maxWidth: '30em',
    backgroundColor: theme.palette.background.paper,
  },
  listElement: {},
}));

const Catalog = (props) => {
  const classes = useStyles();
  const images = useSelector(selectCatalog);
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
          <Paper className={classes.listPaper} elevation={6}>
            <Typography variant='h4' className={classes.title}>
              {strings.CATALOG.TITLE}
            </Typography>
            <List>
              {images.map((element) => {
                return (
                  <ListItem
                    button
                    className={classes.listElement}
                    key={element}
                  >
                    {element}
                  </ListItem>
                );
              })}
            </List>
          </Paper>
        </Grid>
        <Grid item container></Grid>
      </Grid>
    </Container>
  );
};

export default Catalog;
