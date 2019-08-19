import React, { useState } from 'react';
import { H2, StyledMain } from '../components/styledComp/styles';
import Subject from '../components/Subject/Subject';
import { nowaConfigSubjects } from '../data/nowaConfig';

const NowaMaturaPage = () => {
  const [nowaConfig, setNowaConfig] = useState(nowaConfigSubjects);

  return (
    <StyledMain>
      <div>
        <H2 square medium black regular>
          Nowa Matura
        </H2>
      </div>
      <Subject data={nowaConfig} />
    </StyledMain>
  );
};

export default NowaMaturaPage;
