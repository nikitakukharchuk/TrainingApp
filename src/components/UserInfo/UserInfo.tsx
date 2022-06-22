import * as React from 'react';

import { UserInfoContainer, UserInitialsBox } from 'components/UserInfo/styled';
import { getInitials } from 'utils';

export function UserInfo({ username }: { username: string }) {
  return (
    <UserInfoContainer>
      <UserInitialsBox>{getInitials(username)}</UserInitialsBox>
      {username}
    </UserInfoContainer>
  );
}
