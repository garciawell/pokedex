import styled, { css } from 'styled-components';
import waterMarkPokeball from 'assets/img/watermark-pokeball.svg';
import { Text } from 'components/elements';

export interface IWrapperProps {
  color?:
    | 'grass'
    | 'fire'
    | 'water'
    | 'bug'
    | 'normal'
    | 'poison'
    | 'electric'
    | 'ground'
    | 'fairy'
    | 'fighting'
    | 'flying'
    | 'rock';
  loading: string;
}

export const bgType = {
  grass: css`
    background-color: #8bbe8a;
  `,
  fire: css`
    background-color: #ffa756;
  `,
  water: css`
    background-color: #58abf6;
  `,
  bug: css`
    background-color: #8bd674;
  `,
  normal: css`
    background-color: #b5b9c4;
  `,
  poison: css`
    background-color: #9f6e97;
  `,
  electric: css`
    background-color: #f2cb55;
  `,
  ground: css`
    background-color: #f78551;
  `,
  fairy: css`
    background-color: #eba8c3;
  `,
  flying: css`
    background-color: #748fc9;
  `,
  fighting: css`
    background-color: #eb4971;
  `,
  rock: css`
    background-color: #6f6e78;
  `,
  ice: css`
    background-color: #91d8df;
  `,
  psychic: css`
    background-color: #ff6568;
  `,
  dragon: css`
    background-color: #7383b9;
  `,
  ghost: css`
    background-color: #8571be;
  `,
  steel: css`
    background-color: #4c91b2;
  `,
  default: css`
    background-color: #fafafa;
  `,
};

export const Wrapper = styled.div<IWrapperProps>`
  border-radius: 15px;
  padding: 15px;
  height: 130px;
  ${(props) =>
    props.loading !== 'loading' &&
    css`
      background: url(${waterMarkPokeball}) right center no-repeat;
    `}

  ${(props) => bgType[props.color || 'default']}
  cursor:pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const Title = styled(Text)`
  font-size: 30px;
  font-weight: bold;
  color: #fff;
  text-transform: capitalize;
  text-shadow: 1px 1px 2px rgba(150, 150, 150, 0.3);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 180px;
`;
export const NumberStyled = styled.span`
  color: rgba(0, 0, 0, 0.5);
  font-weight: bold;
`;
