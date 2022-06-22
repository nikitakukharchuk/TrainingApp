import { Global, ThemeProvider } from '@emotion/react';
import * as React from 'react';

import { getRebootCSS } from 'components/AppThemeProvider/reboot';
import { appTheme, ThemeVariant } from 'components/AppThemeProvider/theme';
import { AppThemeControllerContext } from 'components/AppThemeProvider/AppThemeControllerContext';

export function AppThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeVariant, setThemeVariant] = React.useState(ThemeVariant.Light);

  const contextValue = React.useMemo(
    () => ({
      toggleTheme: () =>
        themeVariant === ThemeVariant.Light
          ? setThemeVariant(ThemeVariant.Dark)
          : setThemeVariant(ThemeVariant.Light),
      themeVariant
    }),
    [themeVariant]
  );

  return (
    <ThemeProvider theme={appTheme[themeVariant]}>
      <Global styles={getRebootCSS(themeVariant)} />
      <AppThemeControllerContext.Provider value={contextValue}>
        {children}
      </AppThemeControllerContext.Provider>
    </ThemeProvider>
  );
}
