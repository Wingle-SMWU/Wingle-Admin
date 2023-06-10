import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

const Container = styled.div(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',
  height: '6rem',
}));

const LogoText = styled.div(({ theme }) => ({
  fontWeight: `${theme.fontWeight.bold}`,
}));

function WebHeader() {
  const theme = useTheme();

  return (
    <Container>
      <img src={theme.image.logoBasic.default} alt="로고" />
      <LogoText>WINGLE Admin</LogoText>
    </Container>
  );
}

export default WebHeader;
