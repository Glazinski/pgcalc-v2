import styled from 'styled-components';
import posed from 'react-pose';
import { tween } from 'popmotion';

export const ListNew = posed.div({
  enter: {
    opacity: 1,
    transition: {
      default: { ease: 'easeInOut', duration: 300 },
    },
  },
  exit: {
    opacity: 0,
    transition: {
      default: { ease: 'easeInOut', duration: 0 },
    },
  },
  flip: {
    transition: tween,
  },
});

export const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const StyledItem = styled(ListNew)`
  margin: 10px;
`;

export const StyledInput = styled.input`
  width: 100px;
  margin: 5px;
`;

export const StyledTest = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid black;
  margin: 10px;
`;
