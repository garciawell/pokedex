import styled, { css } from 'styled-components';
import Typography, { TypographyProps } from '@material-ui/core/Typography';

interface ITextStyled {
  size: TypographyProps['variant'];
}

export const TextStyled = styled(Typography)<ITextStyled>`
  font-weight:bold;

  ${(props) =>
    props.size === 'h1' &&
    css`
      font-size: 28px;
    `}
  ${(props) =>
    props.size === 'h2' &&
    css`
      font-size: 26px;
    `}
  ${(props) =>
    props.size === 'h3' &&
    css`
      font-size: 24px;
    `}
  ${(props) =>
    props.size === 'h4' &&
    css`
      font-size: 22px;
    `}
`;
