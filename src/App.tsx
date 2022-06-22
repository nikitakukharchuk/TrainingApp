import * as React from 'react';

import { AppThemeProvider } from 'components/AppThemeProvider/AppThemeProvider';
import { RegistrationConfirmation } from 'pages/Authorization/RegistrationConfirmation';
import { SignUp } from 'pages/Authorization/SignUp';

export function App() {
  return (
    <AppThemeProvider>
      <SignUp />
      <RegistrationConfirmation />
    </AppThemeProvider>
  );
}
