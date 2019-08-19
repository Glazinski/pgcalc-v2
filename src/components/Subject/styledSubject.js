import styled from 'styled-components';

export const StyledWrapper = styled.div`
  width: 100%;
  padding: 1rem;
`;

export const StyledForm = styled.form`
  width: 100%;
`;

export const StyledInnerForm = styled.div`
  display: flex;
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryDark};
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
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.8);
  }
`;
