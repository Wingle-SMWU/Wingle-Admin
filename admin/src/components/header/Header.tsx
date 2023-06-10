import { useTheme } from '@emotion/react';
import { IsDefault, IsDesktop } from '@utils/mediaquery';
import React from 'react';
import WebHeader from './WebHeader';
import MobileHeader from './MobileHeader';

function Header() {
  return (
    <>
      <IsDesktop>
        <WebHeader />
      </IsDesktop>

      <IsDefault>
        <MobileHeader />
      </IsDefault>
    </>
  );
}

export default Header;
