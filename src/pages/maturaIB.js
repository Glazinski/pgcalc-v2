import React, { useState } from 'react';
import { H2, StyledMain } from '../components/styledComp';
import { ibConfigSubject, basicGrades, extGrades } from '../data/ibConfig';
import Subject from '../components/Subject/Subject';
import AddSubject from '../components/AddSubject/AddSubject';

const MaturaIBPage = props => {
  const [ibConfig, setIbConfig] = useState(ibConfigSubject);
  const [lastResult, setLastResult] = useState(0);

  const calcResult = () => {
    const results = ibConfig.map(item =>
      item.input
        .map((subject, index) => {
          const { value, unique } = subject;

          if (index % 2 === 0) {
            if (unique) {
              return parseFloat((basicGrades.get(value) * 1.0).toFixed(2));
            }
            return parseFloat((0.1 * basicGrades.get(value) * 1.0).toFixed(2));
          }

          if (unique) {
            return parseFloat((extGrades.get(value) * 1.0).toFixed(2));
          }
          return parseFloat((0.1 * extGrades.get(value) * 1.0).toFixed(2));
        })
        .reduce((acc, cur) => Math.max(acc, cur))
    );

    const veryLastResult = results.reduce((acc, cur) => acc + cur, 0);

    setLastResult(parseFloat(veryLastResult.toFixed(2)));
  };

  const handleItemClick = (e, num) => {
    props.handleItemClick(e, num, calcResult, ibConfig, setIbConfig);
  };

  const handleInputChange = e => {
    props.handleConfigInputChange(e, ibConfig, setIbConfig);
  };

  const handleSubmit = e => {
    e.preventDefault();

    calcResult();
  };

  return (
    <StyledMain>
      <div>
        <H2 square medium black regular mb>
          Matura Międzynarodowa
        </H2>
      </div>
      <Subject
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        handleItemClick={handleItemClick}
        lastResult={lastResult}
        data={ibConfig}
      />
      <AddSubject handleItemClick={handleItemClick} />
    </StyledMain>
  );
};

export default MaturaIBPage;
