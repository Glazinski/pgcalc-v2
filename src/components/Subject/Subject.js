import React from 'react';
import FlipMove from 'react-flip-move';
import { H2, H3, StyledButton } from '../styledComp';
import {
  StyledWrapper,
  StyledForm,
  Test,
  StyledInnerWrapper,
  StyledInnerForm,
  StyledSubjectWrapper,
  StyledInput,
  StyledResultWrapper,
  StyledDeleteButton
} from './styledSubject';
import CustomSelect from '../CustomSelect/CustomSelect';

const Subject = props => (
  <StyledWrapper>
    <StyledForm onSubmit={e => props.handleSubmit(e)}>
      <FlipMove duration={300} easing="ease-in-out">
        {props.data.map(item =>
          item.hidden ? null : (
            <Test key={item.id}>
              <StyledInnerWrapper>
                {item.special ? (
                  <CustomSelect extra={props.extra} />
                ) : (
                  <H2 black>{item.title}</H2>
                )}
                {item.removable ? (
                  <StyledDeleteButton
                    type="submit"
                    onClick={e => props.handleItemClick(e, item.id)}
                  >
                    <i className="material-icons" data-type="del">
                      delete_forever
                    </i>
                  </StyledDeleteButton>
                ) : null}
              </StyledInnerWrapper>

              <StyledInnerForm>
                {item.input.map(({ id, level, value, name, min, max }) => (
                  <StyledSubjectWrapper key={id}>
                    <H3>{level}</H3>
                    <StyledInput
                      type="number"
                      onChange={e => props.handleInputChange(e)}
                      value={value}
                      name={name}
                      min={min}
                      max={max}
                    />
                  </StyledSubjectWrapper>
                ))}
              </StyledInnerForm>
            </Test>
          )
        )}
        <StyledResultWrapper>
          <StyledButton>Policz</StyledButton>
        </StyledResultWrapper>
      </FlipMove>
    </StyledForm>
  </StyledWrapper>
);

export default Subject;
