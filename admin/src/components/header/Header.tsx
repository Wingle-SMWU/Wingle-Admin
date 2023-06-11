import { IsDefault } from '@utils/mediaquery';
import React from 'react';
import WebHeader from './WebHeader';
import MobileHeader from './MobileHeader';

function Header() {
  return (
    <>
      <WebHeader />

      {/* <IsDefault>
      <MobileHeader />
      </IsDefault> */}
    </>
  );
}

export default Header;
