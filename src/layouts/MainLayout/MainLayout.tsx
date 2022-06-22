import React from 'react';

import { NavBar } from 'layouts/MainLayout/NavBar/NavBar';
import { Footer } from 'layouts/MainLayout/Footer/Footer';
import { ContentContainer, ScreenContainer } from 'layouts/MainLayout/styled';

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <ScreenContainer>
      <NavBar />
      <ContentContainer>{children}</ContentContainer>
      <Footer />
    </ScreenContainer>
  );
}
