import React from 'react';
import PropTypes from 'prop-types';
import { PoseGroup } from 'react-pose';
import {
  Formik,
  Form,
  Field,
  FieldArray,
} from 'formik';
import {
  StyledWrapper,
  StyledItem,
  StyledInput,
} from './styles';

const SubjectForm = ({ subjects, grades, validationSchema }) => {
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

    console.log(newData);
    submitForm();
  };

  return (
    <Formik
      initialValues={subjects}
      validationSchema={validationSchema}
      onSubmit={data => data.subjects.map(subject => {
        const {
          primaryScore, advanceScore, primaryScale, advanceScale, forLanguage,
        } = subject;
        let pscore;
        let ascore;

        if (grades) {
          const { basicGrades, extGrades } = grades;
          pscore = basicGrades.get(primaryScore) * primaryScale * forLanguage;
          ascore = extGrades.get(advanceScore) * advanceScale * forLanguage;
        } else {
          pscore = primaryScore * primaryScale * forLanguage;
          ascore = advanceScore * advanceScale * forLanguage;
        }

        // console.log(pscore, ascore);
        // console.log(parseFloat(pscore.toFixed(2)), parseFloat(ascore.toFixed(2)));

        const result = Math.max(parseFloat(pscore.toFixed(2)), parseFloat(ascore.toFixed(2)));

        // subject.bigger = Math.max(parseFloat(pscore.toFixed(2)), parseFloat(ascore.toFixed(2)));
        subject.bigger = result;
        // return { ...subject, bigger: result };
        return subject;
      })}
    >
      {({ values, submitForm }) => (
        <Form>
          <StyledWrapper>
            <FieldArray name="subjects">
              {() => (
                <PoseGroup>
                  {/* {renderInputs(values)} */}
                  {values.subjects.map((subject, index) => (subject.hidden ? null : (
                    <StyledItem key={subject.id}>
                      <h3>{subject.title}</h3>
                      <br />
                      <Field
                        name={`subjects.${index}.primaryScore`}
                        type="number"
                        as={StyledInput}
                      />

                      <Field
                        name={`subjects.${index}.advanceScore`}
                        type="number"
                        as={StyledInput}
                      />
                      <button type="button" onClick={e => toggleSubjects(e, submitForm, values.subjects[index].id, values)}>TEST</button>
                    </StyledItem>
                  )))}
                </PoseGroup>
              )}
            </FieldArray>
          </StyledWrapper>
          <div>
            <button type="button" onClick={e => toggleSubjects(e, submitForm, values.subjects[2].id, values)}>Math</button>
          </div>
          <div>
            <button type="button" onClick={e => toggleSubjects(e, submitForm, values.subjects[3].id, values)}>Extra</button>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
          <pre style={{ fontSize: '1.6rem' }}>
            {JSON.stringify(values, null, 2)}
          </pre>
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
