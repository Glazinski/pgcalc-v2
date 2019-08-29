import React, { useState } from 'react';
import { H2, StyledMain } from '../components/styledComp';
import Subject from '../components/Subject/Subject';
import { nowaConfigSubjects, scale } from '../data/nowaConfig';

import AddSubject from '../components/AddSubject/AddSubject';

const NowaMaturaPage = props => {
  const [nowaConfig, setNowaConfig] = useState(nowaConfigSubjects);
  const [lastResult, setLastResult] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  // Calculate result for Nowa Matura
  const calcResult = () => {
    const results = nowaConfig.map(item =>
      item.input
        .map((subject, index) => {
          if (index % 2 === 0) {
            if (subject.unique) {
              return parseFloat((subject.value * scale.basic).toFixed(2));
            }
            return parseFloat((0.1 * subject.value * scale.basic).toFixed(2));
          }

          if (subject.unique) {
            return parseFloat(subject.value * scale.extended.toFixed(2));
          }
          return parseFloat((0.1 * subject.value * scale.extended).toFixed(2));
        })
        .reduce((acc, cur) => Math.max(acc, cur))
    );

    const veryLastResult = results.reduce((acc, cur) => acc + cur, 0);

    setLastResult(parseFloat(veryLastResult.toFixed(2)));
  };

  const handleItemClick = (e, num) => {
    props.handleItemClick(e, num, calcResult, nowaConfig, setNowaConfig);
  };

  const handleInputChange = e => {
    const { type } = e.target;

    if (type === 'checkbox') setIsChecked(!isChecked);

    props.handleConfigInputChange(e, nowaConfig, setNowaConfig);
  };

  const handleSubmit = e => {
    e.preventDefault();

    calcResult();
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
        lastResult={lastResult}
        isChecked={isChecked}
        checkboxExist
      />
      <AddSubject handleItemClick={handleItemClick} />
    </StyledMain>
  );
};

export default NowaMaturaPage;
