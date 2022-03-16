import React, { useState } from 'react';
import styled from 'styled-components';
import Global from '../Layout/Global';
import Header from './Header';
import Modal from './Modal';
import StyledButton from './styledComp/Button';

const StyledModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  font-size: 5rem;
  width: 100%;
  height: 80%;
`;

const CustomStyledButton = styled(StyledButton)`
  margin-top: 5rem;
  width: 150px
  height: 80px;
`;

const App = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Global>
      <Modal open={isOpen}>
        <StyledModalContent>
          Nie sugeruj się otrzymanymi wynikami!!!
          <br />
          Ten kalkulator jest nieaktualny!!!
          <CustomStyledButton onClick={() => setIsOpen(false)}>
            OK
          </CustomStyledButton>
        </StyledModalContent>
      </Modal>
      <Header />
    </Global>
  );
};

export default App;
