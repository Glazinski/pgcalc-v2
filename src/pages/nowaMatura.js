import React, { useState } from 'react';
import { H2, StyledMain } from '../components/styledComp';
import Subject from '../components/Subject/Subject';
import { nowaConfigSubjects, nowaInputsConfig } from '../data/nowaConfig';
import { extraSubjectsConfig } from '../data/extraSubjects';
import AddSubject from '../components/AddSubject/AddSubject';

const NowaMaturaPage = () => {
  const [nowaConfig, setNowaConfig] = useState(nowaConfigSubjects);
  const [inputsConfig, setInputsConfig] = useState(nowaInputsConfig);
  const [extraConfig, setExtraConfig] = useState(extraSubjectsConfig);

  const onItemClick = num => {
    const newNowaConfig = nowaConfig.map(item => {
      if (item.id === num) {
        item.hidden = false;
      }

      return item;
    });
    setNowaConfig(newNowaConfig);
  };

  return (
    <StyledMain>
      <div>
        <H2 square medium black regular>
          Nowa Matura
        </H2>
      </div>
      <Subject data={nowaConfig} inputs={inputsConfig} extra={extraConfig} />
      <AddSubject onItemClick={onItemClick} />
    </StyledMain>
  );
};

export default NowaMaturaPage;
