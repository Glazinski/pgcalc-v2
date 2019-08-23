import React, { useState } from 'react';
import { H2, StyledMain } from '../components/styledComp';
import Subject from '../components/Subject/Subject';
import { nowaConfigSubjects } from '../data/nowaConfig';
import { extraSubjectsConfig } from '../data/extraSubjects';
import AddSubject from '../components/AddSubject/AddSubject';

const NowaMaturaPage = () => {
  const [nowaConfig, setNowaConfig] = useState(nowaConfigSubjects);
  const [extraConfig, setExtraConfig] = useState(extraSubjectsConfig);

  const handleItemClick = (e, num) => {
    e.preventDefault();
    const { type } = e.target.dataset;

    const newNowaConfig = nowaConfig.map(item => {
      if (item.id === num) {
        item.hidden = false;
      }

      if (item.id === num && type === 'del') {
        item.hidden = true;
      }

      return item;
    });

    setNowaConfig(newNowaConfig);
  };

  const handleInputChange = e => {
    const { name } = e.target;
    let { value, min, max } = e.target;

    // Parse to Int becouse them come as a string
    value = parseInt(value, 10);
    min = parseInt(min, 10);
    max = parseInt(max, 10);

    if (value > max) value = max;
    if (value < min) value = min;
    if (isNaN(value)) value = '';

    const newNowaConfig = nowaConfig.map(item => {
      item.input.map(input => {
        if (input.name === name) {
          input.value = value;
        }
        return input;
      });

      return item;
    });

    setNowaConfig(newNowaConfig);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // This takes all values ant make one array
    // const test = nowaConfig.map(item => item.input.map(input => input)).flat();
  };

  return (
    <StyledMain>
      <div>
        <H2 square medium black regular mb>
          Nowa Matura
        </H2>
      </div>
      <Subject
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        handleItemClick={handleItemClick}
        data={nowaConfig}
        extra={extraConfig}
      />
      <AddSubject handleItemClick={handleItemClick} />
    </StyledMain>
  );
};

export default NowaMaturaPage;
