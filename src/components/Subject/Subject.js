import React from 'react';
import { H2, H3 } from '../styledComp/styles';
import {
  StyledWrapper,
  StyledForm,
  StyledInnerForm,
  StyledSubjectWrapper,
  StyledInput
} from './styledSubject';

const Subject = props => (
  <StyledWrapper>
    <StyledForm>
      {/* <div>
        <H2 black mt>
          Język Polski
        </H2>
      </div>
      <StyledInnerForm>
        <StyledSubjectWrapper>
          <H3>
            Egzamin
            <br />
            Państwowy
          </H3>
          <StyledInput type="number" />
        </StyledSubjectWrapper>

        <StyledSubjectWrapper>
          <H3>
            Egzamin
            <br />
            Państwowy
          </H3>
          <StyledInput type="number" />
        </StyledSubjectWrapper>
      </StyledInnerForm> */}

      {props.data.map(
        ({ id, title, subject, extSubject, level, secondLevel, hidden }) =>
          hidden ? null : (
            <React.Fragment key={id}>
              <div>
                <H2 black mt>
                  {title}
                </H2>
              </div>
              <StyledInnerForm>
                <StyledSubjectWrapper>
                  <H3 pad>{level}</H3>
                  <StyledInput type="number" name={subject} />
                </StyledSubjectWrapper>

                <StyledSubjectWrapper>
                  <H3 pad>{secondLevel}</H3>
                  <StyledInput type="number" name={extSubject} />
                </StyledSubjectWrapper>
              </StyledInnerForm>
            </React.Fragment>
          )
      )}
    </StyledForm>
  </StyledWrapper>
);

export default Subject;
