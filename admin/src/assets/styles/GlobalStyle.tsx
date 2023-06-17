import React from 'react';
import { css, Global } from '@emotion/react';
import { mq } from '@utils/mediaquery';

const style = css`
  html {
    font-size: 62.5%;
    box-sizing: border-box;
    line-height: normal;
    font-family: 'Pretendard';
    overflow-x: hidden;
  }

  body {
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    box-sizing: border-box;
    font-size: 1.4rem;
    font-weight: 400;
    padding: 0;
    margin: 0 auto;

    &::-webkit-scrollbar {
      width: 1rem;
      height: 0.6rem;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #fcfcfe;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
    }

    ${mq('desktop')} {
      font-size: 1.6rem;
    }
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;

    &::-webkit-scrollbar {
      width: 1rem;
      height: 0.6rem;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #fcfcfe;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
  }

  a {
    color: inherit;
    font-size: inherit;
    text-decoration: none;
  }

  *::placeholder {
    font-family: 'Pretendard';
    font-weight: normal;
    color: #c2c2c7;
  }

  button,
  a {
    &:hover {
      transition: all 0.3s;
    }
  }

  ul,
  li {
    list-style: none;
  }

  button {
    font: inherit;
    cursor: pointer;
    outline: none;
    background: inherit;
  }

  textarea,
  input {
    width: 100%;
    outline: none;
    font-weight: 700;

    &::placeholder {
      transition: all 0.3s;
      color: #959599;
    }

    &:focus {
      &::placeholder {
        opacity: 0;
      }
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

function GlobalStyle() {
  return <Global styles={style} />;
}

export default GlobalStyle;
