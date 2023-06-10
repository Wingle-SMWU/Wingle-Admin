import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

const Container = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

function MobileHeader() {
  const theme = useTheme();

  return (
    <Container>
      <img src={theme.image.logoLogin.default} alt="로그인 로고" height="120px" />
      다함께 즐기는 국제교류 커뮤니티
    </Container>
  );
}

export default MobileHeader;
