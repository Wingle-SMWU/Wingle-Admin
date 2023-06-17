import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { mq } from '@utils/mediaquery';
import React from 'react';

const Container = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',
  height: '6rem',
  paddingLeft: theme.spacing.mobPadding,

  [mq('tablet')]: {
    paddingLeft: theme.spacing.tabPadding,
  },

  [mq('desktop')]: {
    paddingLeft: theme.spacing.pcPadding,
  },
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
