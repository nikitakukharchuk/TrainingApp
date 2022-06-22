import * as React from 'react';

import { PageTitle } from 'components/Title';
import { MainLayout } from 'layouts/MainLayout/MainLayout';
import { Link } from 'components/Link';
import { Button } from 'components/Button/Button';
import { MessageBox } from 'pages/Authorization/styled';

export function RegistrationConfirmation() {
  return (
    <MainLayout>
      <Link>Back to home</Link>
      <PageTitle>Registration Confirmation</PageTitle>
      <MessageBox>
        <div>
          Please activate your account with the activation link in the email{' '}
          <strong>example@gmail.com</strong>. Please, check your email
        </div>
        <Button shouldFitContainer>Go to home</Button>
      </MessageBox>
    </MainLayout>
  );
}
