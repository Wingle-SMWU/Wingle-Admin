import styled from '@emotion/styled';
import React from 'react';

interface StyledButtonType {
  active: boolean;
}

const StyledButton = styled.button<StyledButtonType>(({ theme, active }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem',
  color: active ? theme.color.white : theme.color.gray600,
  background: active ? theme.color.orange500 : theme.color.gray200,
  fontSize: '1.2rem',
  fontWeight: theme.fontWeight.bold,
  borderRadius: '0.5rem',

  ':hover': {
    background: theme.color.gray400,
    color: theme.color.gray600,
  },
}));

interface TertiaryButtonType {
  buttonName: string;
  active?: boolean;
  clickEvent?: () => void;
  buttonType?: 'submit' | 'button';
}
function TertiaryButton({
  buttonName,
  active = false,
  buttonType = 'button',
  clickEvent,
}: TertiaryButtonType) {
  return (
    <StyledButton active={active} type={buttonType} onClick={clickEvent}>
      {buttonName}
    </StyledButton>
  );
}

export default TertiaryButton;
