import React, { useState, useRef } from 'react';
import { PoseGroup } from 'react-pose';
import { StyledAddButton, StyledWrapper, StyledItem } from './styledAddSubject';
import { H2 } from '../styledComp';
import { useOutsideClick } from '../../hooks';

const AddSubject = props => {
  const [visible, setVisible] = useState(false);

  const ref = useRef(null);
  useOutsideClick(ref, setVisible);

  return (
    <StyledAddButton onClick={() => setVisible(!visible)} ref={ref}>
      <i className="material-icons">add</i>
      <PoseGroup>
        {visible ? (
          <StyledWrapper key="89742">
            <StyledItem onClick={e => props.onItemClick(e, 3)}>
              <H2 regular square black mb>
                Matematyka
              </H2>
            </StyledItem>
            <StyledItem onClick={e => props.onItemClick(e, 4)}>
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

export default AddSubject;
