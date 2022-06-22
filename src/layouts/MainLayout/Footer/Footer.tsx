import {
  CopyrightText,
  FooterContainer,
  FooterContent
} from 'layouts/MainLayout/Footer/styled';

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <CopyrightText>&#169;{currentYear} TMS</CopyrightText>
        <CopyrightText>All rights reserved</CopyrightText>
      </FooterContent>
    </FooterContainer>
  );
}
