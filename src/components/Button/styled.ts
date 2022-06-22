import styled from '@emotion/styled';

import { css } from '@emotion/react';

import { ButtonAppearance } from 'components/Button/types';
import { FontSize } from 'components/AppThemeProvider/theme';

export const StyledButton = styled.button<{
  appearance: ButtonAppearance;
  shouldFitContainer?: boolean;
}>`
  border-radius: 4px;
  font-size: ${FontSize.Small};
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  width: ${({ shouldFitContainer }) =>
    shouldFitContainer ? '100%' : 'fit-content'};

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  ${({ appearance, theme: { colors } }) => {
    switch (appearance) {
      case ButtonAppearance.Primary:
        return css`
          background-color: ${colors.primary};
          color: ${colors.invertedText};
        `;
      case ButtonAppearance.Secondary:
        return css`
          background-color: ${colors.secondary};
        `;
      case ButtonAppearance.Secondary2:
        return css`
          background-color: transparent;
          color: ${colors.danger};

          &:hover:not(:disabled) {
            box-shadow: inset 0 0 0 2px ${colors.border};
          }
        `;
    }
  }}
`;
