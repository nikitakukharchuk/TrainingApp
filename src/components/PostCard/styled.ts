import styled from '@emotion/styled';

import { FontSize } from 'components/AppThemeProvider/theme';

export const PostContainer = styled.div`
  display: grid;
  grid-template-areas: 'details image' 'controls controls';
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr auto;
  grid-row-gap: 8px;
  padding: 8px 0;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.border};
`;

export const PostDetailsContainer = styled.div`
  grid-area: details;
  display: flex;
  gap: 8px;
  flex-direction: column;
  margin-right: 8px;
`;

export const PostDate = styled.div`
  font-size: ${FontSize.Small};
  color: ${({ theme: { colors } }) => colors.textSubtle};
`;

export const PostTitle = styled.h3`
  margin: 0;
`;

export const PostText = styled.div`
  color: ${({ theme: { colors } }) => colors.textSubtle};
`;

export const PostImage = styled.img`
  grid-area: image;
  max-width: 300px;
  max-height: 150px;
  height: auto;
`;

export const PostControlsContainer = styled.div`
  grid-area: controls;
  display: flex;
  justify-content: space-between;
`;

export const PostControlsGroup = styled.div`
  display: flex;
  gap: 8px;
`;

export const PostControlIcon = styled.button`
  padding: 8px;
  background: transparent;
  border: none;
  cursor: pointer;

  &:hover svg {
    fill: ${({ theme: { colors } }) => colors.primarySubtle};
  }

  svg {
    height: 16px;
    width: 16px;
  }
`;
