import styled, { css } from 'styled-components';
import { IPokeTypes } from 'store/modules/pokemons/models';
import { darken } from 'polished';

export interface ILabelProps {
  color?: IPokeTypes['type']['name'];
}

export const bgType = {
  grass: css`
    background: #62b957;
  `,
  fire: css`
    background: #fd7d24;
  `,
  water: css`
    background: #4a90da;
  `,
  bug: css`
    background: #8cb230;
  `,
  normal: css`
    background: #9da0aa;
  `,
  poison: css`
    background: #a552cc;
  `,
  electric: css`
    background: #eed535;
  `,
  ground: css`
    background: #dd7748;
  `,
  fairy: css`
    background: #ed6ec7;
  `,
  fighting: css`
    background: #d04164;
  `,
  flying: css`
    background: #748fc9;
  `,
  rock: css`
    background: #baab82;
  `,
  ice: css`
    background-color: #61cec0;
  `,
  psychic: css`
    background-color: #ea5d60;
  `,
  dragon: css`
    background-color: #0f6ac0;
  `,
  ghost: css`
    background-color: #556aae;
  `,
  steel: css`
    background-color: #417d9a;
  `,
  default: css`
    background: ${darken(0.2, '#fafafa')};
  `,
};

export const Label = styled.span<ILabelProps>`
  font-size: 14px;
  padding: 5px;
  ${(props) => bgType[props.color || 'rock']}
  color: #fff;
  text-transform: capitalize;
  border-radius: 5px;
  -webkit-box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.1);
  min-width: 45px;
  text-align: center;
`;

export const Box = styled.div`
  display: inline-grid;
  grid-gap: 5px 10px;
  grid-area: auto;
  grid-auto-flow: column;
  margin-top: 10px;
`;
