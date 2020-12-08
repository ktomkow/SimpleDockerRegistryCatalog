import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

import { Typography, List, ListItem } from '@material-ui/core';
import strings from '../../localization/strings';
import { selectImageTags } from './../../redux/slices/catalogSlice';

const useStyles = makeStyles((theme) => ({
  title: { padding: '0.4em' },
  subtitle: {
    marginLeft: '0.5em',
    marginRight: '0.5em',
    border: 'groove 2px',
    borderRadius: '0.3em',
    borderColor: theme.palette.primary.dark,
    padding: '0.2em'
  },
  tag: {
    width: '95%',
    transition: '0.3s',
    borderRadius: '0.5em',
    '&:hover, &:focus': {
      backgroundColor: theme.palette.primary.main,
      marginLeft: '0.5em',
    },
  },
}));

const ImageTags = (props) => {
  const classes = useStyles();
  const image = useSelector(selectImageTags);

  return (
    <>
      <Typography variant='h4' className={classes.title}>
        {strings.CATALOG.TAGS_OF_IMAGE}
      </Typography>
      {image?.name && (
        <Typography variant='h6' className={classes.subtitle}>
          {image.name}
        </Typography>
      )}

      <List>
        {image.tags.map((tag) => {
          return (
            <ListItem className={classes.tag} key={tag}>
              {tag}
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default ImageTags;
