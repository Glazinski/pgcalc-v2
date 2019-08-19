import React from 'react';
import { H2, H3 } from '../styledComp/styles';
import {
  StyledWrapper,
  StyledForm,
  StyledInnerForm,
  StyledSubjectWrapper,
  StyledInput
} from './styledSubject';
import CustomSelect from '../CustomSelect/CustomSelect';

const Subject = props => (
  <StyledWrapper>
    <StyledForm>
      {props.data.map(({ id, title, hidden, special }) =>
        hidden ? null : (
          <React.Fragment key={id}>
            <div>
              {special ? (
                <CustomSelect extra={props.extra} />
              ) : (
                <H2 black mt>
                  {title}
                </H2>
              )}
            </div>
            <StyledInnerForm>
              {props.test.map(item => (
                <StyledSubjectWrapper key={item.id}>
                  <H3 pad>{item.level}</H3>
                  <StyledInput
                    type="number"
                    name={item.subject}
                    min={item.min}
                    max={item.max}
                  />
                </StyledSubjectWrapper>
              ))}
            </StyledInnerForm>
          </React.Fragment>
        )
      )}
    </StyledForm>
  </StyledWrapper>
);

export default Subject;
