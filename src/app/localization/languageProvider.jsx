import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import strings from './strings';

import { initialLanguageSet } from '../redux/slices/languageSlice';

const LanguageProvider = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const currentLanguage = strings.getLanguage();
    dispatch(initialLanguageSet(currentLanguage));
  }, []);

  return <>{props.children}</>;
};

export default LanguageProvider;
