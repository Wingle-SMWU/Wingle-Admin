import { useTheme } from '@emotion/react';
import React from 'react';

function Login() {
  const theme = useTheme();
  return (
    <div>
      <img src={theme.image.logoLogin.default} alt="로그인로고" />
    </div>
  );
}

export default Login;
