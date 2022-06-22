import styled from '@emotion/styled';

export const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme: { colors } }) => colors.textSubtle};

  &:hover {
    color: ${({ theme: { colors } }) => colors.primary};
  }
`;
