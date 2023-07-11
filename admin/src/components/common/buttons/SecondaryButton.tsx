import styled from '@emotion/styled';
import { mq } from '@utils/mediaquery';
import React from 'react';

const StyledButton = styled.button<{ active: boolean }>(({ theme, active }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1.5rem 6rem',
  color: active ? theme.color.white : theme.color.gray500,
  background: active ? theme.color.orange500 : theme.color.gray200,
  fontSize: '1.6rem',
  fontWeight: theme.fontWeight.bold,
  borderRadius: '0.5rem',
  pointerEvents: active ? 'inherit' : 'none',
  cursor: active ? 'pointer' : 'alias',

  ':hover': {
    background: theme.color.orange400,
  },

  [mq('tablet')]: {
    padding: '1.5rem 7.5rem',
  },
}));

interface SecondaryButtonType {
  buttonName: string;
  clickEvent?: () => void;
  buttonType?: 'submit' | 'button';
  active?: boolean;
}
function SecondaryButton({
  buttonName,
  buttonType = 'button',
  clickEvent,
  active = false,
}: SecondaryButtonType) {
  return (
    <StyledButton type={buttonType} onClick={clickEvent} active={active}>
      {buttonName}
    </StyledButton>
  );
}

export default SecondaryButton;
