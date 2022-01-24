import React from 'react';

import { Container, ModalStyled } from './styles';



const Modal = ({ open, children, handleClose }) => {
  return (
    <ModalStyled open={open} onClose={handleClose}>
      <Container>{children}</Container>
    </ModalStyled>
  );
};

export default Modal;
