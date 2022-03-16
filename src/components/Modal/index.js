import React from 'react';
import { StyledModal, StyledOverlay } from './styles';

const Modal = ({ open, children }) => (
  open && (
    <>
      <StyledModal>{children}</StyledModal>
      <StyledOverlay />
    </>
  )
);

export default Modal;
