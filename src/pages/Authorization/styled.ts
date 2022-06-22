import styled from '@emotion/styled';

export const FormContainer = styled.div`
  width: 70%;
  padding: 40px 60px;
  border: 1px solid ${({ theme: { colors } }) => colors.border};
  border-radius: 10px;
  margin: auto;
`;

export const SwitchContainer = styled.div`
  color: ${({ theme: { colors } }) => colors.textSubtle};
  padding: 8px 16px;
  text-align: center;

  a {
    color: ${({ theme: { colors } }) => colors.primarySubtle};
  }
`;

export const MessageBox = styled.div`
  border: 1px solid ${({ theme: { colors } }) => colors.border};
  padding: 24px 16px;
  width: 50%;
  margin: 40px auto;

  display: grid;
  grid-row-gap: 24px;
`;
