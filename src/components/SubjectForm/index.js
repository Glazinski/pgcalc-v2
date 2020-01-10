import React from 'react';
import PropTypes from 'prop-types';
import { PoseGroup } from 'react-pose';
import {
  Formik, Form, Field, FieldArray,
} from 'formik';

const SubjectForm = ({ subjects }) => {
  const test = 0;

  return (
    <Formik
      initialValues={subjects}
      onSubmit={data => console.log(data)}
    >
      {({ values }) => (
        <>
          <div>
            Elo
          </div>
        </>
      )}
    </Formik>
  );
};

SubjectForm.defaultProps = {
  subjects: {},
};

SubjectForm.propTypes = {
  subjects: PropTypes.oneOfType([PropTypes.object]),
};

export default SubjectForm;
