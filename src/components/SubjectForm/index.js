/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { PoseGroup } from 'react-pose';
import {
  Formik,
  Form,
  Field,
  FieldArray,
  useField,
} from 'formik';
import {
  StyledWrapper,
  StyledItem,
  StyledInputWrapper,
  StyledInput,
  StyledErrorMessage,
  StyledInnerWrapper,
  StyledDeleteButton,
  StyledResultWrapper,
  StyledResultItem,
  StyledLabel,
  StyledInnerLabel,
  StyledInnerLabelInfo,
} from './styles';
import {
  StyledTitleWrapper, StyledCheckbox, StyledButton, H2, H3,
} from '../styledComp';
import CustomSelect from '../CustomSelect';
import AddSubject from '../AddSubject';

const MyField = ({ ...props }) => {
  const [field, meta] = useField(props);
  const errorMsg = !!(meta.error && meta.touched);

  return (
    <StyledInputWrapper>
      <StyledInput {...field} {...props} errors={errorMsg} />

      {errorMsg ? (
        <StyledErrorMessage>{meta.error}</StyledErrorMessage>
      ) : null}
    </StyledInputWrapper>
  );
};

const clearForeignField = (submitForm, formValues) => {
  formValues.subjects.map((subject, index) => {
    if (index === 0) {
      subject.primaryScore = '';
    }

    return subject;
  });

  submitForm();
};

const clearFields = (submitForm, values) => {
  values.subjects.map(subject => {
    subject.primaryScore = '';
    subject.advanceScore = '';
    subject.bigger = 0;

    return subject;
  });

  submitForm();
};

const toggleSubjects = (e, submitForm, id, values) => {
  e.preventDefault();
  const newData = { ...values };

  newData.subjects.map(subject => {
    if (id === subject.id) {
      subject.hidden = !subject.hidden;
      subject.primaryScore = '';
      subject.advanceScore = '';
      subject.bigger = 0;
    }

    return subject;
  });

  submitForm();
};

const SubjectForm = ({ subjects, grades, validationSchema }) => {
  const [result, setResult] = useState(0);
  const [isHover, setIsHover] = useState(false);

  const toggleHover = () => setIsHover(!isHover);

  console.log('re-render');

  // const renderFields = values => {
  //   const test = 0;

  //   return values.subjects.map((subject, index) => (subject.hidden ? null : (
  //     <StyledItem key={subject.id} title={subject.title}>
  //       {index === 3 ? <CustomSelect /> : (
  //         <div style={{ height: '46px' }}>
  //           <H2 left black>{subject.title}</H2>
  //         </div>
  //       )}

  //       <StyledInnerWrapper>
  //         <H3>{values.basLevel}</H3>
  //         {/* {_.has(values, 'oralLevel') ? <H3>{values.oralLevel}</H3> : null} */}
  //         <H3>{values.extLevel}</H3>
  //         <MyField
  //           name={`subjects.${index}.primaryScore`}
  //           type="number"
  //           disabled={index === 0 ? values.isDoubleLang : false}
  //         />

  //         <MyField name={`subjects.${index}.advanceScore`} type="number" />
  //       </StyledInnerWrapper>

  //       {index === 2 || index === 3 ? (
  //         <StyledDeleteButton
  //           type="button"
  //           onClick={e => toggleSubjects(e, submitForm, values.subjects[index].id, values)}
  //         >
  //           <i className="material-icons">
  //             delete_forever
  //           </i>
  //         </StyledDeleteButton>
  //       ) : null}
  //     </StyledItem>
  //   )));
  // };

  return (
    <Formik
      initialValues={subjects}
      validationSchema={validationSchema}
      onSubmit={data => {
        data.subjects.map(subject => {
          const {
            primaryScore, advanceScore, primaryScale, advanceScale, forLanguage, oralScore,
          } = subject;
          let pscore;
          let ascore;

          if (_.has(subject, 'oralScore')) {
            if (_.isNumber(oralScore) && _.isNumber(primaryScore)) {
              pscore = ((grades.get(primaryScore) + grades.get(oralScore)) / 2) * primaryScale * forLanguage;
            } else pscore = grades.get(primaryScore) * primaryScale * forLanguage;
            ascore = grades.get(advanceScore) * advanceScale * forLanguage;
          } else if (grades) {
            const { basicGrades, extGrades } = grades;

            pscore = basicGrades.get(primaryScore) * primaryScale * forLanguage;
            ascore = extGrades.get(advanceScore) * advanceScale * forLanguage;
          } else {
            pscore = primaryScore * primaryScale * forLanguage;
            ascore = advanceScore * advanceScale * forLanguage;
          }

          subject.bigger = Math.max(parseFloat(pscore.toFixed(2)), parseFloat(ascore.toFixed(2)));

          return subject;
        });

        // The final result
        const res = data.subjects.reduce((acc, cur) => acc + cur.bigger, 0);
        setResult(parseFloat(res).toFixed(2));
      }}
    >
      {({ values, submitForm }) => (
        <Form>
          <StyledTitleWrapper>
            <H2 square medium black regular>
              {values.title}
            </H2>
            <button
              style={{ border: 'none', backgroundColor: 'transparent' }}
              type="button"
              onClick={() => clearFields(submitForm, values)}
            >
              <i className="material-icons">
              delete_sweep
              </i>
            </button>
          </StyledTitleWrapper>
          <StyledWrapper>
            <FieldArray name="subjects">
              {() => (
                <PoseGroup>
                  {values.subjects.map((subject, index) => {
                    const isStara = _.has(values, 'oralLevel');

                    return (subject.hidden ? null : (
                      <StyledItem key={subject.id} title={subject.title}>
                        {index === 3 ? <CustomSelect /> : (
                          <div style={{ height: '46px' }}>
                            <H2 left black>{subject.title}</H2>
                          </div>
                        )}

                        <StyledInnerWrapper threeCol={!!(isStara && index !== 1)}>
                          <H3>{values.basLevel}</H3>
                          {isStara && index !== 1 ? <H3>{values.oralLevel}</H3> : null}
                          <H3>{values.extLevel}</H3>
                          <MyField
                            name={`subjects.${index}.primaryScore`}
                            type="number"
                            disabled={index === 0 ? values.isDoubleLang : false}
                          />

                          {isStara && index !== 1 ? (
                            <MyField name={`subjects.${index}.oralScore`} type="number" />
                          ) : null}

                          <MyField name={`subjects.${index}.advanceScore`} type="number" />
                        </StyledInnerWrapper>

                        {index === 2 || index === 3 ? (
                          <StyledDeleteButton
                            type="button"
                            onClick={e => toggleSubjects(e, submitForm, values.subjects[index].id, values)}
                          >
                            <i className="material-icons">
                            delete_forever
                            </i>
                          </StyledDeleteButton>
                        ) : null}
                      </StyledItem>
                    ));
                  })}
                </PoseGroup>
              )}
            </FieldArray>
          </StyledWrapper>
          <StyledResultWrapper>
            <StyledResultItem>
              <H2 square regular xl black>Wynik: {result > 0 ? result : ''}</H2>
            </StyledResultItem>
            <StyledResultItem>
              {_.has(subjects, 'isDoubleLang') ? (
                <>
                  <Field
                    type="checkbox"
                    as={StyledCheckbox}
                    name="isDoubleLang"
                    onClick={() => clearForeignField(submitForm, values)}
                  />
                  <StyledLabel>
                    Matura Dwujęzyczna
                  </StyledLabel>
                  <StyledInnerLabel
                    onMouseEnter={toggleHover}
                    onMouseLeave={toggleHover}
                  >
                      i
                    {isHover && (
                    <StyledInnerLabelInfo>
                          Przy wyborze matury dwujęzycznej, punkty z języka
                          obcego są liczone jak rozszerzenie.
                    </StyledInnerLabelInfo>
                    )}
                  </StyledInnerLabel>
                </>
              ) : null}
            </StyledResultItem>
            <StyledResultItem>
              <StyledButton type="submit">Policz</StyledButton>
            </StyledResultItem>
          </StyledResultWrapper>
          {/* <pre style={{ fontSize: '1.6rem' }}>
            {JSON.stringify(values, null, 2)}
          </pre> */}
          <AddSubject onClick={toggleSubjects} values={values} submitForm={submitForm} />
        </Form>
      )}
    </Formik>
  );
};

SubjectForm.defaultProps = {
  grades: null,
};

SubjectForm.propTypes = {
  validationSchema: PropTypes.oneOfType([PropTypes.object]).isRequired,
  subjects: PropTypes.oneOfType([PropTypes.object]).isRequired,
  grades: PropTypes.oneOfType([PropTypes.object]),
};

export default SubjectForm;
