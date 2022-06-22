import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.border};
`;

export const Tab = styled.div<{ isActive: boolean; isDisabled?: boolean }>`
  padding: 8px 16px;
  font-weight: bold;
  user-select: none;
  position: relative;

  ${({ isDisabled, theme: { colors } }) =>
    isDisabled
      ? css`
          cursor: not-allowed;
          color: ${colors.textSubtle};
        `
      : css`
          cursor: pointer;

          &:hover {
            color: ${colors.primary};
          }
        `}

  ${({ isActive, theme: { colors } }) =>
    isActive
      ? css`
          &::before {
            content: '';
            display: block;
            position: absolute;
            bottom: -1px;
            left: 0;
            right: 0;
            height: 2px;
            background-color: ${colors.primary};
          }
        `
      : ''}
`;
