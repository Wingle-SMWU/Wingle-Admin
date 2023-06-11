import styled from '@emotion/styled';
import React from 'react';

const StyledButton = styled.button(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1.5rem 7.5rem',
  color: theme.color.white,
  background: theme.color.orange500,
  fontSize: '1.6rem',
  fontWeight: theme.fontWeight.bold,
  borderRadius: '0.5rem',

  ':hover': {
    background: theme.color.orange400,
  },
}));

interface SecondaryButtonType {
  buttonName: string;
  clickEvent?: () => void;
  buttonType?: 'submit' | 'button';
}
function SecondaryButton({ buttonName, buttonType = 'button', clickEvent }: SecondaryButtonType) {
  return (
    <StyledButton type={buttonType} onClick={clickEvent}>
      {buttonName}
    </StyledButton>
  );
}

export default SecondaryButton;
