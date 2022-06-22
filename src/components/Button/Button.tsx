import * as React from 'react';

import { ButtonAppearance, ButtonProps } from 'components/Button/types';

import { StyledButton } from './styled';

export function Button({
  appearance = ButtonAppearance.Primary,
  children,
  ...restProps
}: ButtonProps) {
  return (
    <StyledButton
      appearance={appearance}
      {...restProps}
    >
      {children}
    </StyledButton>
  );
}
