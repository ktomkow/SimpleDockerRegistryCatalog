import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './app/components/home/home';
import NotFound from './app/components/notFound/notFound';
import AddressChanger from './app/components/addressChanger/addressChanger';
import MyNavbar from './app/components/navbar/myNavbar';
import Catalog from './app/components/catalog/catalog';
import MyFooter from './app/components/footer/myFooter';
import Example from './Example';

const App = () => {
  return (
    <Example/>
  );
};

export default App;
