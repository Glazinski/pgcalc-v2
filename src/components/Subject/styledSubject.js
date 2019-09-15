import styled, { css, keyframes } from 'styled-components';
import { media } from '../../utils';
import { List, ListNew, Text } from '../styledComp/animations';

export const StyledWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  position: relative;

  /* ::after {
    content: '';
    position: absolute;
    display: inline-block;
    width: 200px;
    height: 200px;
    background-color: ${({ theme }) => theme.colors.primary};
    right: 0;
  } */
`;

export const StyledForm = styled.form`
  width: 100%;
`;

export const StyledSubjectWrapper = styled.div`
  ${media.tablet`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 210px;
    grid-gap: 4rem;
    padding: 4rem;
  `}

  /* ${media.desktop`
    grid-template-columns: repeat(3, 1fr);
  `} */
`;

export const AnimationWrapper = styled(ListNew)`
  ${media.tablet`
    max-width: 600px;
  `}

  ${media.desktop`
    margin: 0 auto;
    width: 75%;
  `}
`;

export const StyledInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 44px;
  position: relative;

  i {
    font-size: 28px !important;
  }
`;

export const StyledInnerForm = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryDark};
  margin-bottom: 2rem;
  position: relative;

  ::after {
    content: '';
    position: absolute;
    display: none;
    width: 100px;
    height: 100px;
  }

  ${({ title }) =>
    title.includes('obcy')
      ? css`
          ::after {
            display: inline-block;
            left: -10px;
            top: -55px;
            z-index: -5;
            clip-path: polygon(100% 0, 0% 100%, 0 0);
            background-color: ${({ theme }) => theme.colors.secondary};
          }
        `
      : title.includes('dodatkowy') &&
        css`
          ::after {
            display: inline-block;
            clip-path: polygon(100% 0, 0% 100%, 100% 100%);
            right: 0;
            bottom: -15px;
            background-color: ${({ theme }) => theme.colors.primary};
          }
        `}
`;

export const StyledInnerSubjectWrapper = styled.div`
  margin: 2.5rem 0;
  width: 100%;
`;

export const StyledInputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3rem;
`;

export const StyledInput = styled.input`
  position: relative;
  appearance: none;
  width: 67px;
  height: 26px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.secondaryDark};
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: none;
  transition: box-shadow 0.2s ease-in-out;
  margin-top: 2rem;
  z-index: 3;

  :focus {
    box-shadow: 0 0 1rem ${({ theme }) => theme.boxShadow};
  }

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const StyledLabel = styled.label`
  position: relative;
  margin-left: 1rem;
  font-size: ${({ theme }) => theme.fontSize.s};

  :hover {
    cursor: pointer;
  }
`;

export const StyledInnerLabel = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  margin-left: 5px;
  margin-bottom: 7px;
  /* right: -13%;
  top: -15%; */
  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.colors.secondaryDark};
  font-size: 1.3rem;

  :hover {
    cursor: pointer;
  }
`;

const enter = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const StyledInnerLabelInfo = styled(List)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 180px;
  height: 120px;
  padding: 1rem;
  bottom: 25px;
  left: -75px;
  box-shadow: 0 0 1rem ${({ theme }) => theme.boxShadow};
  animation: ${enter} 0.3s ease-in-out both;
  font-size: ${({ theme }) => theme.fontSize.s};
  background-color: ${({ theme }) => theme.colors.white};

  ${media.tablet`
    left: 22px;
    bottom: 0;
  `}

  :hover {
    cursor: default;
  }
`;

export const StyledResultWrapper = styled(ListNew)`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 5rem;

  ${media.tablet`
    grid-column: 1 / -1;
  `}
`;

export const StyledDeleteButton = styled.button`
  appearance: none;
  border: none;
  background: none;

  :hover {
    cursor: pointer;
  }
`;

export const StyledText = styled(Text)``;
