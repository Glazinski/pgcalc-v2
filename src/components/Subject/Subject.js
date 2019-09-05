import React, { useState, useEffect } from 'react';
import { PoseGroup } from 'react-pose';
import { H2, H3, StyledButton, StyledCheckbox } from '../styledComp';
import {
  StyledWrapper,
  StyledForm,
  StyledSubjectWrapper,
  AnimationWrapper,
  StyledInnerWrapper,
  StyledInnerForm,
  StyledInnerSubjectWrapper,
  StyledInputWrapper,
  StyledInput,
  StyledLabel,
  StyledResultWrapper,
  StyledDeleteButton,
  StyledText
} from './styledSubject';
import CustomSelect from '../CustomSelect/CustomSelect';
import ExtraList from '../ExtraList/ExtraList';

const Subject = props => {
  useEffect(() => {}, [props.lastResult]);

  return (
    <>
      <StyledWrapper>
        <StyledForm onSubmit={e => props.handleSubmit(e)}>
          <StyledSubjectWrapper>
            <PoseGroup>
              {props.data.map(item =>
                item.hidden ? null : (
                  <AnimationWrapper key={item.id}>
                    <StyledInnerWrapper>
                      {item.special ? (
                        <CustomSelect />
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
                      {item.input.map(
                        ({ id, level, value, name, min, max }) => (
                          <StyledInnerSubjectWrapper key={id}>
                            <H3>{level}</H3>
                            <StyledInput
                              type="number"
                              onChange={e => props.handleInputChange(e)}
                              value={value}
                              name={name}
                              min={min}
                              max={max}
                            />
                          </StyledInnerSubjectWrapper>
                        )
                      )}
                    </StyledInnerForm>
                  </AnimationWrapper>
                )
              )}

              <StyledResultWrapper key="351633874">
                <H2 square regular xl black>
                  Wynik:{' '}
                  <StyledText>
                    {props.lastResult > 0 ? props.lastResult : null}
                  </StyledText>
                </H2>
                {props.checkboxExist ? (
                  <StyledInputWrapper>
                    <StyledCheckbox
                      id="twoLang"
                      type="checkbox"
                      checked={props.isChecked}
                      onChange={e => props.handleInputChange(e)}
                    />
                    <StyledLabel htmlFor="twoLang">
                      Matura Dwujęzyczna
                    </StyledLabel>
                  </StyledInputWrapper>
                ) : null}
                <StyledButton mt>Policz</StyledButton>
              </StyledResultWrapper>
              <ExtraList key="824593798lhsda" />
            </PoseGroup>
          </StyledSubjectWrapper>
        </StyledForm>
      </StyledWrapper>
    </>
  );
};

export default Subject;
