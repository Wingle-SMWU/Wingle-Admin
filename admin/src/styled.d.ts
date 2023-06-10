import '@emotion/react';

import { image } from './theme';

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';

declare module '@emotion/react' {
  export interface Theme {
    image: typeof image;
    color: {
      black: string;
      white: string;
      gray100: string;
      gray200: string;
      gray300: string;
      gray400: string;
      gray500: string;
      gray600: string;
      gray700: string;
      gray800: string;
      gray900: string;
      orange100: string;
      orange200: string;
      orange300: string;
      orange400: string;
      orange500: string;
      red400: string;
      red500: string;
    };
    fontWeight: {
      light: number;
      regular: number;
      bold: number;
      extra_bold: number;
    };
    fontFamily: {
      basic: string;
    };
    shadow: {
      primary: string;
      secondary: string;
    };
  }
}
