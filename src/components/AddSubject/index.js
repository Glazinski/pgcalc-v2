import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { PoseGroup } from 'react-pose';
import { StyledAddButton, StyledWrapper, StyledItem } from './styledAddSubject';
import { H2 } from '../styledComp';
import { useOutsideClick } from '../../hooks';

const AddSubject = ({ onClick, submitForm, values }) => {
  const [visible, setVisible] = useState(false);

  const ref = useRef(null);
  useOutsideClick(ref, setVisible);

  return (
    <StyledAddButton type="button" onClick={() => setVisible(!visible)} ref={ref}>
      <i className="material-icons">add</i>
      <PoseGroup>
        {visible ? (
          <StyledWrapper key="89742">
            <StyledItem onClick={e => onClick(e, submitForm, values.subjects[2].id, values)}>
              <H2 regular square black mb>
                Matematyka
              </H2>
            </StyledItem>
            <StyledItem onClick={e => onClick(e, submitForm, values.subjects[3].id, values)}>
              <H2 regular square black>
                Przedmiot dodatkowy
              </H2>
            </StyledItem>
          </StyledWrapper>
        ) : null}
      </PoseGroup>
    </StyledAddButton>
  );
};

AddSubject.propTypes = {
  values: PropTypes.oneOfType([PropTypes.object]).isRequired,
  onClick: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
};

export default AddSubject;
