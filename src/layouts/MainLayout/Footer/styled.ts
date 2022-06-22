import styled from '@emotion/styled';

import { MAX_CONTENT_WIDTH } from 'layouts/MainLayout/styled';

export const FooterContainer = styled.div`
  width: 100%;
`;

export const FooterContent = styled.div`
  padding: 16px 0;
  border-top: 1px solid ${({ theme: { colors } }) => colors.border};
  display: flex;
  justify-content: space-between;
  max-width: ${MAX_CONTENT_WIDTH};
  margin: auto;
`;

export const CopyrightText = styled.div`
  color: ${({ theme: { colors } }) => colors.border};
`;
