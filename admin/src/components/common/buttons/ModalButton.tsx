import styled from '@emotion/styled';
import React from 'react';

interface StyledButtonType {
  confirm: boolean;
}

const StyledButton = styled.button<StyledButtonType>(({ theme, confirm }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1.5rem 7.5rem',
  color: theme.color.gray600,
  background: theme.color.gray200,
  fontSize: '1.6rem',
  fontWeight: theme.fontWeight.bold,
  borderRadius: '0.5rem',

  ':hover': {
    background: confirm ? theme.color.orange400 : theme.color.gray200,
  },

  ...(confirm && {
    color: theme.color.white,
    background: theme.color.orange500,
  }),
}));

interface ModalButtonType {
  buttonName: string;
  clickEvent?: () => void;
  buttonType?: 'submit' | 'button';
  confirm?: boolean;
}
function ModalButton({
  buttonName,
  buttonType = 'button',
  clickEvent,
  confirm = false,
}: ModalButtonType) {
  return (
    <StyledButton type={buttonType} onClick={clickEvent} confirm={confirm}>
      {buttonName}
    </StyledButton>
  );
}

export default ModalButton;
