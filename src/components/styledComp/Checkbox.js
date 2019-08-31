import styled from 'styled-components';

export const StyledCheckbox = styled.input`
  position: relative;
  width: 30px;
  height: 15px;
  appearance: none;
  background: ${({ theme }) => theme.colors.secondary};
  outline: none;
  border-radius: 20px;
  z-index: 2;

  ::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 15px;
    border-radius: 20px;
    opacity: 0;
    z-index: -1;
    transition: opacity 0.3s ease-in-out;
    background: ${({ theme }) => theme.colors.primary};
  }

  :checked::after {
    opacity: 1;
  }

  ::before {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 20px;
    top: 0;
    left: 0;
    background: ${({ theme }) => theme.colors.secondaryLight};
    transform: scale(1.1);
    box-shadow: 0 2px 5px ${({ theme }) => theme.boxShadow};
    transition: transform 0.3s ease-in-out;
    z-index: 1;
  }

  :checked::before {
    transform: translateX(16px) scale(1.1);
  }

  :hover {
    cursor: pointer;
  }

  margin-top: ${({ mt }) => (mt ? '3rem' : null)};
`;
