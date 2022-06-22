import styled from '@emotion/styled';

export const NavBarContainer = styled.div`
  color: ${({ theme: { colors } }) => colors.invertedText};
  background-color: ${({ theme: { colors } }) => colors.primary};
  height: 60px;
  display: grid;
  grid-template-columns: auto 1fr auto auto auto;
`;

export const Section = styled.div`
  height: 100%;

  &:not(:last-child) {
    border-right: 1px solid ${({ theme: { colors } }) => colors.border};
  }
`;

export const NavButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: ${({ theme: { colors } }) => colors.invertedText};
  height: 100%;
  padding: 20px;

  &:hover {
    background-color: rgb(255, 255, 255, 0.1);
  }

  &:active {
    background-color: rgb(255, 255, 255, 0.4);
  }

  svg {
    fill: ${({ theme: { colors } }) => colors.invertedText};
    height: 20px;
    width: 20px;
  }
`;
