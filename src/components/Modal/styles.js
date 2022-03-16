import styled from 'styled-components';

export const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 95vw;
  height: 97vh;
  z-index: 1000;
  padding: 2rem;
  background: white;
  box-shadow: 0px 8px 35px 0px rgba(66, 68, 90, 1);
`;

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  pointer-events: none;
  background: rgba(0, 0, 0, 0.3);
`;
