import React, { useEffect } from 'react';

import {
  Grid,
  List,
  ListItem,
  Paper,
  Typography,
} from '@material-ui/core';

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
  title: { padding: '0.4em' },
  listPaper: {
    width: '100%',
    maxWidth: '30em',
    backgroundColor: theme.palette.background.paper,
  },
  listElement: {},
}));

const ImagesList = (props) => {
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
  );
};

export default ImagesList;
