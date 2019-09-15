import React from 'react';
import Global from '../Layout/Global';
import Header from './Header/Header';

const App = () => {
  const handleConfigInputChange = (e, config, setConfig, isChecked, id) => {
    const { name } = e.target;
    let { value, min, max } = e.target;

    // Parse to Int because these properties come as a string
    value = parseInt(value, 10);
    min = parseInt(min, 10);
    max = parseInt(max, 10);

    // Changes value if user write something he shouldn't
    if (value > max) value = max;
    if (value < min) value = min;
    if (isNaN(value)) value = '';

    // Map nested array and gives user's value
    const newConfig = config.map(item => {
      item.input.map(input => {
        // If id is the same as basicForeign id
        // and checkbox is checked in nowamatura
        // then it disables input for basicForeign and changes
        // value to string because it shouldn't be counted
        if (id === input.id) {
          if (isChecked || !isChecked) {
            input.disabled = !input.disabled;
            input.value = '';
          }
        }

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

      // Cleans all inputs
      if (type === 'clear') {
        item.input.map(input => {
          input.value = '';
          return input;
        });
        calcResult();
      }

      // Removes a specific subject on user click
      if (item.id === num && type === 'del') {
        item.hidden = true;

        // When subject is deleted it changes its value
        // to "" so it doesn't take this into account of last result
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
