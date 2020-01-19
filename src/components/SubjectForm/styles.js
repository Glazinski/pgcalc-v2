import styled, { css } from 'styled-components';
import { ListNew } from '../styledComp/animations';
import media from '../../utils';

export const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 4rem auto;

  ${media.tablet`
    grid-template-columns: repeat(2, 1fr);
  `}
`;

export const StyledItem = styled(ListNew)`
  position: relative;
  text-align: center;
  width: 90%;
  margin: 2rem auto;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryDark};

  ${media.tablet`
    max-width: 600px;
  `}

  ::after {
    content: '';
    position: absolute;
    display: none;
    width: 100px;
    height: 100px;
  }

  ${({ title }) => (title.includes('obcy')
    ? css`
      ::after {
        display: inline-block;
        left: -10px;
        top: -30px;
        z-index: -5;
        clip-path: polygon(100% 0, 0% 100%, 0 0);
        background-color: ${({ theme }) => theme.colors.secondary};
      }
    `
    : title.includes('dodatkowy')
      && css`
        ::after {
          display: inline-block;
          clip-path: polygon(100% 0, 0% 100%, 100% 100%);
          right: -10px;
          bottom: -30px;
          background-color: ${({ theme }) => theme.colors.primary};
        }
    `)} 
`;

export const StyledInnerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 2rem;
`;

export const StyledInputWrapper = styled.div`
  position: relative;
`;

export const StyledInput = styled.input`
  /* position: relative; */
  appearance: none;
  width: 67px;
  height: 26px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.secondaryDark};
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: none;
  transition: box-shadow 0.2s ease-in-out;
  margin: 4rem auto;
  /* z-index: 3; */

  :focus {
    box-shadow: 0 0 1rem ${({ theme }) => theme.boxShadow};
  }

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  ${({ errors }) => (errors
    ? css`
      border-color: ${({ theme }) => theme.colors.error};
    ` : null
  )};
`;

export const StyledErrorMessage = styled.div`
  position: absolute;
  width: 100px;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.colors.error};
`;

export const StyledDeleteButton = styled.button`
  position: absolute;
  top: -20px;
  right: 0;
  appearance: none;
  background-color: transparent;
  border: none;

  :hover {
    cursor: pointer;
  }
`;

export const StyledResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledResultItem = styled.div`
  margin: 1rem 1rem;

  ${media.tablet`
    margin: 1rem 4rem;
  `}
`;

export const StyledLabel = styled.label`
  position: relative;
  margin-left: 1rem;
  font-size: ${({ theme }) => theme.fontSize.s};

  :hover {
    cursor: pointer;
  }
`;
