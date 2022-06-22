import styled from '@emotion/styled';

export const MAX_CONTENT_WIDTH = '960px';

export const ScreenContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  width: 100%;
  min-height: 100vh;
`;

export const ContentContainer = styled.div`
  margin: auto;
  padding: 24px 16px;
  max-width: ${MAX_CONTENT_WIDTH};
  min-height: 100%;
  width: 100%;
`;
