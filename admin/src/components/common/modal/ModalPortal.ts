import React from 'react';
import ReactDOM from 'react-dom';

interface Portal {
  children: React.ReactElement;
}
export default function ModalPortal({ children }: Portal) {
  const modalElement = document.querySelector('#modal');

  return modalElement ? ReactDOM.createPortal(children, modalElement) : null;
}
