import * as React from 'react';

import { ReactComponent as MenuIcon } from 'assets/icons/menu.svg';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';
import { ReactComponent as UserIcon } from 'assets/icons/user.svg';
import { ReactComponent as LightThemeIcon } from 'assets/icons/light.svg';
import { ReactComponent as DarkThemeIcon } from 'assets/icons/moon.svg';
import {
  NavBarContainer,
  NavButton,
  Section
} from 'layouts/MainLayout/NavBar/styled';
import { ThemeVariant } from 'components/AppThemeProvider/theme';
import { useAppThemeController } from 'components/AppThemeProvider/AppThemeControllerContext';

export function NavBar() {
  const { themeVariant, toggleTheme } = useAppThemeController();

  return (
    <NavBarContainer>
      <Section>
        <NavButton>
          <MenuIcon />
        </NavButton>
      </Section>
      <Section />
      <Section>
        <NavButton onClick={toggleTheme}>
          {themeVariant === ThemeVariant.Light ? (
            <LightThemeIcon />
          ) : (
            <DarkThemeIcon />
          )}
        </NavButton>
      </Section>
      <Section>
        <NavButton>
          <SearchIcon />
        </NavButton>
      </Section>
      <Section>
        <NavButton>
          <UserIcon />
        </NavButton>
      </Section>
    </NavBarContainer>
  );
}
