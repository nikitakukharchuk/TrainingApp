import * as React from 'react';

import { PageTitle } from 'components/Title';
import { MainLayout } from 'layouts/MainLayout/MainLayout';
import { Input } from 'components/Input/Input';
import { Link } from 'components/Link';
import { Button } from 'components/Button/Button';
import { FormContainer, SwitchContainer } from 'pages/Authorization/styled';

export function SignUp() {
  return (
    <MainLayout>
      <Link>Back to home</Link>
      <PageTitle>Sign Up</PageTitle>
      <FormContainer>
        <Input label="Name" />
        <Input label="Email" />
        <Input label="Password" />
        <Input label="Confirm Password" />
        <Button shouldFitContainer>Sign Up</Button>
        <SwitchContainer>
          Already have an account? <Link>Sign In</Link>
        </SwitchContainer>
      </FormContainer>
    </MainLayout>
  );
}
