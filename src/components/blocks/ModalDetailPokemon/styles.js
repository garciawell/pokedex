import { Grid } from '@material-ui/core';
import styled, { css } from 'styled-components';
import WatermarkLarge from '../../../assets/img/watermark-pokeball-large.svg';
import { Text } from '../../elements';
import { bgType as bg } from '../CardPokemon/styles';
import { bgType } from '../TypesPokemon/styles';

export const Container = styled(Grid)`
  height: 100%;
`;

export const List = styled.ul`
  margin-top: 35px;
  margin-bottom: 15px;
  li {
    padding: 10px 0;
  }
`;

export const Bar = styled.div`
  height: 4px;
  background: ${(props) => props.theme.palette.grey[100]};
  width: 150px;
  position: relative;
  border-radius: 15px;
  &:after {
    width: ${(props) => props.size / 1.5}%;
    height: 100%;
    position: absolute;
    background: ${(props) => props.theme.palette.success.main};
    content: '';
    border-radius: 15px;
  }
`;

export const CustomTitle = styled(Text)`
  color: ${(props) => props.theme.palette.common.white};
  font-size: 32px;
  text-transform: capitalize;
`;

export const CustomSubTitle = styled(Text)`
  color: ${(props) => props.theme.palette.success.main};
  font-size: 18px;

  ${(props) => props.white
    && css`
      color: ${props.theme.palette.common.white};
    `}
`;

export const Left = styled(Grid)`
  ${(props) => bg[props.color || 'default']}
  padding:50px 35px;
  text-align: center;
  position: relative;

  &:before {
    position: absolute;
    z-index: 0;
    content: '';
    width: 100%;
    height: 100%;
    background-image: url(${WatermarkLarge});
    background-repeat: no-repeat;
    background-position: top 106px center;
    background-size: 100px;
    left: 0;
    top: 0;
    opacity: 0.1;
  }
`;

export const Relative = styled.div`
  position: relative;
`;

export const Right = styled(Grid)`
  padding: 50px 35px;
`;

export const ListAbilities = styled.ul`
  margin-top: 25px;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: 1fr;
  li {
    ${(props) => bgType[props.color || 'default']}
    padding:5px;

    color: ${(props) => props.theme.palette.common.white};
    border-radius: 5px;
    text-align: center;
  }
`;

export const Img = styled.img`
  margin-bottom: 35px;
  margin-top: 15px;
`;
