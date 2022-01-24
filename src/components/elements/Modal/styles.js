import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';

export const Container = styled.div`
  background: #fff;
  margin: 0 auto;
  max-width: 600px;
  width: 100%;
  height: 500px;
  border-radius: 35px;
  overflow: hidden;
  margin: 15px;
`;

export const ModalStyled = styled(Modal)`
  align-items: center;
  justify-content: center;
  display: flex;
`;
