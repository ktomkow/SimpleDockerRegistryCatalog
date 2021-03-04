import { useState } from 'react';
import Element from './Element';

const Container = () => {
  const [elements, setElements] = useState([<Element name='Jacek' />]);
  const [isVisible, setVisible] = useState(true);

  const handleClick = () => {
    const element = Object.assign([], elements);
    element.push(<Element name='Placek' />);
    setElements(element);
  };

  const swap = () => {
    setVisible(!isVisible);
  };

  const giveClasses = () => {
    let classes = 'actual-container ';
    if (isVisible) {
      classes += 'actual-nonempty-container';
    } else {
      classes += 'actual-empty-container';
    }

    return classes;
  };

  return (
    <div>
      <h1>Hera are elements</h1>
      <button onClick={handleClick}>push</button>
      <button onClick={swap}>swap</button>

      <div className={giveClasses()}>
        <p>something</p>
        {isVisible && elements.map((e, i) => <div key={i}>{e}</div>)}
      </div>
    </div>
  );
};

export default Container;
