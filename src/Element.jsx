import { Paper } from '@material-ui/core';

import './some.css';

const Element = ({ name }) => {
  return (
    <Paper style={{ padding: '1%', margin: '1%'}} className="element">
      <h2>I am the element</h2>
      <h3>And my name is {name}</h3>
    </Paper>
  );
};

export default Element;
