import React from "react";

import logo from "../../../logo.svg";
import "../../../App.css";

import strings from "../../localization/strings";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Counter from "../counter";

const useStyles = makeStyles((theme) => ({
  primary: {
    color: theme.palette.primary.main,
  },
  secondary: {
    color: theme.palette.secondary.main,
  },
}));

const Home = (props) => {
  const classes = useStyles();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{strings.HOME.HELLO}</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <Button className={classes.primary}>Primary</Button>
          <Button color="primary">Primary</Button>
          <Button className={classes.secondary}>Secondary</Button>
          <Button color="secondary">Secondary</Button>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Counter/>
      </header>
    </div>
  );
};

export default Home;
