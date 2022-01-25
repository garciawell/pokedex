import React from 'react';

import { Container, ModalStyled } from './styles';

function Modal({ open, children, handleClose }) {
  return (
    <ModalStyled open={open} onClose={handleClose}>
      <Container>{children}</Container>
    </ModalStyled>
  );
}

export default Modal;
