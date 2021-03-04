import { useState } from 'react';
import Element from './Element';

const Container = () => {
  const [elements, setElements] = useState([<Element name='Jacek' />]);

const handleClick = () => {
 const element = Object.assign([], elements);
 element.push(<Element name="Placek"/>);
 setElements(element);
};

  return (
    <div>
      <h1>Hera are elements</h1>
      <button onClick={handleClick}>push</button>
      {elements.map((e, i) => (
        <div key={i}>{e}</div>
      ))}
    </div>
  );
};

export default Container;
