import React from 'react';

import { Container, ModalStyled } from './styles';

interface IModal {
  open: boolean;
  handleClose: (details: boolean) => void;
}

const Modal: React.FC<IModal> = ({ open, children, handleClose }) => {
  return (
    <ModalStyled open={open} onClose={handleClose}>
      <Container>{children}</Container>
    </ModalStyled>
  );
};

export default Modal;
