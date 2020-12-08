import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

import { selectImageTags } from './../../redux/slices/catalogSlice';

const useStyles = makeStyles((theme) => ({}));

const ImageTags = (props) => {
  const tags = useSelector(selectImageTags);
  
  return <p>a</p>;
};

export default ImageTags;
