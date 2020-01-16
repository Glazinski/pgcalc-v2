import React from 'react';
import * as yup from 'yup';
import { H2, StyledMain, StyledTitleWrapper } from '../components/styledComp';
import SubjectForm from '../components/SubjectForm';

export default (Matura, data) => () => {
  const config = { ...data };
  const { min, max } = config.subjects;

  const validationSchema = yup.object({
    subjects: yup.array().of(
      yup.object({
        primaryScore: yup
          .number()
          .positive()
          .integer()
          .min(min)
          .max(max),
        advanceScore: yup
          .number()
          .positive()
          .integer()
          .min(min)
          .max(max),
      }),
    ),
  });


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
          validationSchema={validationSchema}
        />
      </StyledMain>
    </Matura>
  );
};
