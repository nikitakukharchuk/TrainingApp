import styled from '@emotion/styled';

export const UserInfoContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  justify-content: center;
  align-items: center;
  grid-column-gap: 8px;
  padding: 16px;
  background-color: ${({ theme: { colors } }) => colors.primary};
  color: ${({ theme: { colors } }) => colors.invertedText};
  width: fit-content;
`;

export const UserInitialsBox = styled.div`
  padding: 8px;
  text-transform: uppercase;
  background-color: ${({ theme: { colors } }) => colors.primarySubtle};
`;
