import { Theme } from '@emotion/react';

export const image = {
  logoBasic: require('@assets/images/logo.svg'),
  logoLogin: require('@assets/images/logo_login.svg'),
  modalClose: require('@assets/images/modal_close.svg'),
  checkFalse: require('@assets/images/check_false.svg'),
  checkTrue: require('@assets/images/check_true.svg'),
};

export const AppTheme: Theme = {
  image,
  color: {
    black: '#000000',
    white: '#FFFFFF',
    gray100: '#FCFCFE',
    gray200: '#EEEEF2',
    gray300: '#DCDCE0',
    gray400: '#C2C2C7',
    gray500: '#959599',
    gray600: '#6C6C70',
    gray700: '#49494D',
    gray800: '#303033',
    gray900: '#222223',
    orange100: '#FFF3EB',
    orange200: '#FFD7BD',
    orange300: '#FFB07E',
    orange400: '#FF9856',
    orange500: '#FF812E',
    red400: '#FF7070',
    red500: '#F03030',
  },
  fontWeight: {
    light: 300,
    regular: 400,
    bold: 700,
    extra_bold: 800,
  },
  fontFamily: {
    basic: 'Pretendard',
  },
  shadow: {
    primary: '0px 4px 4px rgba(0, 0, 0, 0.1)',
    secondary: '0px 4px 8px rgba(0, 0, 0, 0.24);',
  },
  spacing: {
    pcPadding: '20%',
    tabPadding: '10%',
    mobPadding: '5%',
  },
};

export type ITheme = typeof AppTheme;

export default AppTheme;
