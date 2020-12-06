import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./app/components/home/home";
import NotFound from "./app/components/notFound/notFound";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
