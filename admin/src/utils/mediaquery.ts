import { useMediaQuery } from 'react-responsive';

interface MediaQuery {
  children: React.ReactElement;
}

export const IsDesktop = ({ children }: MediaQuery) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  return isDesktop ? children : null;
};

export const IsTablet = ({ children }: MediaQuery) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
};

export const IsMobile = ({ children }: MediaQuery) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

export const IsDefault = ({ children }: MediaQuery) => {
  const isDefault = useMediaQuery({ maxWidth: 1023 });
  return isDefault ? children : null;
};

const bp = {
  mobile: 300,
  tablet: 768,
  desktop: 1024,
};

export const mq = (n: keyof typeof bp) => `@media (min-width: ${bp[n]}px)`;
