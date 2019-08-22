import React from 'react';
import { PoseGroup } from 'react-pose';
import { H2, H3, StyledButton } from '../styledComp';
import {
  StyledWrapper,
  StyledForm,
  Test,
  StyledInnerWrapper,
  StyledInnerForm,
  StyledSubjectWrapper,
  StyledInput,
  StyledDeleteButton
} from './styledSubject';
import CustomSelect from '../CustomSelect/CustomSelect';

const Subject = props => (
  <StyledWrapper>
    <StyledForm>
      <PoseGroup>
        {props.data.map(
          ({ id, title, inputTitle, hidden, special, removable }) =>
            hidden ? null : (
              <Test key={id}>
                <StyledInnerWrapper>
                  {special ? (
                    <CustomSelect extra={props.extra} />
                  ) : (
                    <H2 black>{title}</H2>
                  )}
                  {removable ? (
                    <StyledDeleteButton
                      type="submit"
                      onClick={e => props.onItemClick(e, id)}
                    >
                      <i className="material-icons" data-type="del">
                        delete_forever
                      </i>
                    </StyledDeleteButton>
                  ) : null}
                </StyledInnerWrapper>
                <StyledInnerForm>
                  {props.inputs.map(item => {
                    return (
                      <StyledSubjectWrapper key={item.id}>
                        <H3 pad>{item.level}</H3>
                        <StyledInput
                          type="number"
                          name={`${item.subject}${inputTitle}`}
                          min={item.min}
                          max={item.max}
                        />
                      </StyledSubjectWrapper>
                    );
                  })}
                </StyledInnerForm>
              </Test>
            )
        )}
      </PoseGroup>
      <StyledButton key="buttonan">Policz</StyledButton>
    </StyledForm>
  </StyledWrapper>
);

export default Subject;
