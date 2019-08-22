import styled from 'styled-components';
import { List } from '../styledComp/animations';

export const StyledWrapper = styled.div`
  width: 100%;
  padding: 1rem;
`;

export const StyledForm = styled.form`
  width: 100%;
`;

export const Test = styled(List)``;

export const StyledInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

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
`;

export const StyledSubjectWrapper = styled.div`
  margin-bottom: 2.5rem;
`;

export const StyledInput = styled.input`
  appearance: none;
  width: 67px;
  height: 26px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.secondaryDark};
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: none;
  transition: box-shadow 0.2s ease-in-out;

  :focus {
    box-shadow: 0 0 1rem ${({ theme }) => theme.boxShadow};
  }

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const StyledDeleteButton = styled.button`
  appearance: none;
  border: none;
  background: none;
`;
