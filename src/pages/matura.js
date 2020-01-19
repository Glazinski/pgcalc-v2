import React from 'react';
import * as yup from 'yup';
import { StyledMain } from '../components/styledComp';
import SubjectForm from '../components/SubjectForm';

export default (Matura, data) => () => {
  const config = { ...data };
  const { min, max } = config.subjects;
  const errorMsg = `Wynik musi być pomiędzy ${min} a ${max}.`;

  const validationSchema = yup.object({
    subjects: yup.array().of(
      yup.object({
        primaryScore: yup
          .number()
          .positive()
          .integer()
          .min(min, errorMsg)
          .max(max, errorMsg),
        advanceScore: yup
          .number()
          .positive()
          .integer()
          .min(min, errorMsg)
          .max(max, errorMsg),
      }),
    ),
  });

  return (
    <Matura>
      <StyledMain>
        <SubjectForm
          subjects={config.subjects}
          grades={config.grades && null}
          validationSchema={validationSchema}
        />
      </StyledMain>
    </Matura>
  );
};
