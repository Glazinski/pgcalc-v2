import React, { useState } from 'react';
import * as yup from 'yup';
import { StyledMain } from '../components/styledComp';
import SubjectForm from '../components/SubjectForm';

export default (Matura, data) => () => {
  const localConfig = JSON.parse(localStorage.getItem(data.subjects.title));
  const [config, setConfig] = useState({ ...data, ...localConfig } || { ...data });

  const { min, max } = config.subjects;
  const errorMsg = `Wynik musi być pomiędzy ${min} a ${max}.`;

  const handleConfig = formData => {
    localStorage.setItem(config.subjects.title, JSON.stringify(formData));
    setConfig({ ...config, formData });
  };

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
        oralScore: yup
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
          handleConfig={handleConfig}
          grades={config.grades ? config.grades : null}
          validationSchema={validationSchema}
        />
      </StyledMain>
    </Matura>
  );
};
