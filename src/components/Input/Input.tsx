import { InputProps } from 'components/Input/types';

import {
  ErrorMessage,
  InputBox,
  InputContainer,
  InputIcon,
  StyledInput,
  StyledLabel
} from './styled';

export function Input({ label, error, iconBefore, ...inputProps }: InputProps) {
  return (
    <InputContainer>
      <StyledLabel>{label}</StyledLabel>
      <InputBox
        isInvalid={!!error}
        isDisabled={inputProps.disabled}
      >
        {iconBefore ? <InputIcon>{iconBefore}</InputIcon> : null}
        <StyledInput {...inputProps} />
      </InputBox>
      <ErrorMessage>{error}</ErrorMessage>
    </InputContainer>
  );
}
