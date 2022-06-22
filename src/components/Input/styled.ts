import styled from '@emotion/styled';

import { css } from '@emotion/react';

import { FontSize } from 'components/AppThemeProvider/theme';

export const InputContainer = styled.div`
  display: grid;
`;

export const StyledLabel = styled.label`
  font-weight: bold;
  margin-bottom: 8px;
`;

export const InputIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;

  svg {
    height: 20px;
    width: 20px;
  }
`;

export const InputBox = styled.div<{
  isInvalid: boolean;
  isDisabled?: boolean;
}>`
  display: grid;
  grid-template-areas: 'iconBefore input';
  grid-template-columns: auto 1fr;
  border: 1px solid ${({ theme: { colors } }) => colors.border};
  padding: 4px 8px;
  border-radius: 4px;
  width: 100%;

  ${({ isInvalid, theme: { colors } }) =>
    isInvalid
      ? css`
          border-color: ${colors.danger};

          svg {
            fill: ${colors.danger};
          }
        `
      : ''}
  ${({ isDisabled, theme: { colors } }) =>
    isDisabled
      ? css`
          background-color: ${colors.disabled};

          svg {
            opacity: 0.3;
          }
        `
      : ''}
  &:focus-within {
    outline: 2px solid ${({ theme: { colors } }) => colors.border};
  }
`;

export const StyledInput = styled.input`
  border: none;
  grid-area: input;
  width: 100%;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`;

export const ErrorMessage = styled.div`
  font-size: ${FontSize.Small};
  margin-top: 8px;
  height: 21px;
  width: 100%;

  color: ${({ theme: { colors } }) => colors.danger};
`;
