import React from 'react';

import styled from '@emotion/styled';

interface StyledButtonType {
  active: boolean;
  margin?: string;
}
const StyledButton = styled.button<StyledButtonType>(({ theme, active, margin }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  margin: margin !== undefined ? margin : 0,
  height: '4.8rem',
  background: active ? theme.color.orange500 : theme.color.gray200,
  borderRadius: '0.5rem',
  color: active ? theme.color.white : theme.color.gray500,
  pointerEvents: active ? 'inherit' : 'none',
  cursor: active ? 'pointer' : 'alias',
  fontWeight: theme.fontWeight.bold,
}));

interface IPraimaryButton {
  buttonName: string;
  active?: boolean;
  clickEvent?: () => void;
  buttonType?: 'submit' | 'button';
  disabled?: boolean;
  margin?: string;
}
function PrimaryButton({
  buttonName,
  active = false,
  clickEvent,
  buttonType = 'button',
  disabled,
  margin,
}: IPraimaryButton) {
  return (
    <StyledButton
      active={active}
      onClick={clickEvent}
      type={buttonType}
      disabled={disabled}
      margin={margin}
    >
      {buttonName}
    </StyledButton>
  );
}

export default PrimaryButton;
