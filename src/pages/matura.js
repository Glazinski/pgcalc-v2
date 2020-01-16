import React from 'react';
import { H2, StyledMain, StyledTitleWrapper } from '../components/styledComp';
import SubjectForm from '../components/SubjectForm';

export default (Matura, data) => () => {
  const config = { ...data };

  return (
    <Matura>
      <StyledMain>
        <StyledTitleWrapper>
          <H2 square medium black regular mb>
            {config.subjects.title}
          </H2>
          <button type="button">
            <i className="material-icons">
              delete_sweep
            </i>
          </button>
        </StyledTitleWrapper>
        <SubjectForm
          subjects={config.subjects}
          grades={config.grades && null}
          validationSchema={config.validationSchema}
        />
      </StyledMain>
    </Matura>
  );
};
