import React from 'react';
import Global from '../Layout/Global';
import Header from './Header/Header';

const App = () => {
  const handleConfigInputChange = (e, config, setConfig) => {
    const { name } = e.target;
    let { value, min, max } = e.target;

    // Parse to Int becouse these properties come as a string
    value = parseInt(value, 10);
    min = parseInt(min, 10);
    max = parseInt(max, 10);

    // Change value if user write something he shouldn't
    if (value > max) value = max;
    if (value < min) value = min;
    if (isNaN(value)) value = '';

    // Map nested array and give them user's value
    const newConfig = config.map(item => {
      item.input.map(input => {
        if (input.name === name) {
          input.value = value;
        }
        return input;
      });

      return item;
    });

    setConfig(newConfig);
  };

  const handleItemClick = (e, num, calcResult, config, setConfig) => {
    e.preventDefault();
    const { type } = e.target.dataset;

    const newConfig = config.map(item => {
      if (item.id === num) {
        item.hidden = false;
      }

      if (item.id === num && type === 'del') {
        item.hidden = true;

        // After delete change value to 0
        // I don't want to have deleted subject in last result
        item.input.map(input => {
          input.value = '';
          return input;
        });
        calcResult();
      }

      return item;
    });

    setConfig(newConfig);
  };

  return (
    <Global>
      <Header
        handleConfigInputChange={handleConfigInputChange}
        handleItemClick={handleItemClick}
      />
    </Global>
  );
};

export default App;
