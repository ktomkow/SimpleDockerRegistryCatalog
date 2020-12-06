import React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import {
  currentTheme
} from '../redux/slices/themeSlice';

const MyThemeProvider = (props) => {
  const theme = useSelector(currentTheme);

  return (
    <ThemeProvider theme={theme.theme}>
      {props.children}
    </ThemeProvider>
  );
};

export default MyThemeProvider;
