import {
  Container,
  Grid,
  List,
  ListItem,
  Paper,
  Typography,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  selectCatalog,
  requestCatalogUpdate,
  requestImageTagsList,
} from './../../redux/slices/catalogSlice';
import { makeStyles } from '@material-ui/core/styles';

import strings from '../../localization/strings';
import { useDispatch } from 'react-redux';

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
  const dispatch = useDispatch();
  const classes = useStyles();
  const images = useSelector(selectCatalog);

  useEffect(() => {
    if (!images || images.length === 0) {
      dispatch(requestCatalogUpdate());
    }
  }, []);

  const retrieveTagsList = (imageName) => () => {
    dispatch(requestImageTagsList(imageName));
  };

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
                    onClick={retrieveTagsList(element)}
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
