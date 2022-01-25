import React from 'react';
import { TextStyled } from './styles';

function Text({
  children, variant, size, className,
}) {
  return (
    <TextStyled className={className} variant={variant} size={size}>
      {children}
    </TextStyled>
  );
}

export default Text;
