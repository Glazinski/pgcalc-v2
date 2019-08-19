import styled from 'styled-components';

export const H2 = styled.h2`
  position: relative;
  color: ${({ theme, black }) =>
    black ? theme.colors.black : theme.colors.secondaryDark};

  font-size: ${({ theme, medium }) =>
    medium ? theme.fontSize.l : theme.fontSize.s};

  font-weight: ${({ theme, regular }) =>
    regular ? theme.fontWeight.regular : theme.fontWeight.bold};

  margin-top: ${({ mt }) => (mt ? '2rem' : null)};

  ${({ theme, square }) => square && theme.square};
`;

// export const H2square = styled.h2`
//   position: relative;
//   color: ${({ theme }) => theme.colors.secondaryDark};
//   font-size: 2.3rem;

//   /* :before {
//     content: '';
//     width: 24px;
//     height: 24px;
//     background-color: ${({ theme }) => theme.colors.secondary};
//   } */
// `;
