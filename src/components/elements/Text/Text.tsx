import React from 'react';
import { TypographyProps } from '@material-ui/core/Typography';
import { TextStyled } from './styles';

interface ITextProps extends TypographyProps {
  children: React.ReactNode;
  size: TypographyProps['variant'];
}

const Text: React.FC<ITextProps> = ({ children, variant, size, className }) => {
  return (
    <TextStyled className={className} variant={variant} size={size}>
      {children}
    </TextStyled>
  );
};

export default Text;
