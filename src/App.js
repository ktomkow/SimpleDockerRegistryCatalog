import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./app/components/home/home";
import NotFound from "./app/components/notFound/notFound";
import AddressChanger from './app/components/addressChanger/addressChanger';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/address" component={AddressChanger} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
