import React, { useState } from 'react';
import {
  H2,
  StyledMain,
  StyledAddButton
} from '../components/styledComp/styles';
import Subject from '../components/Subject/Subject';
import { nowaConfigSubjects, test } from '../data/nowaConfig';
import { extraSubjectsConfig } from '../data/extraSubjects';
import CustomSelect from '../components/CustomSelect/CustomSelect';

const NowaMaturaPage = () => {
  const [nowaConfig, setNowaConfig] = useState(nowaConfigSubjects);
  const [testConfig, setTestConfig] = useState(test);
  const [extraConfig, setExtraConfig] = useState(extraSubjectsConfig);

  return (
    <StyledMain>
      <div>
        <H2 square medium black regular>
          Nowa Matura
        </H2>
      </div>
      <Subject data={nowaConfig} test={testConfig} extra={extraConfig} />
      <StyledAddButton>+</StyledAddButton>
    </StyledMain>
  );
};

export default NowaMaturaPage;
