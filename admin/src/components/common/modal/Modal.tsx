import React, { useCallback, useEffect } from 'react';
import styled from '@emotion/styled';
import { mq } from '@utils/mediaquery';
import ModalPortal from './ModalPortal';

const ModalContainer = styled.div(() => ({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1000,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '100vh',
}));

const Overlay = styled.div(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 1,
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.6)',
}));

const ModalIn = styled.div(() => ({
  position: 'relative',
}));

const ModalContents = styled.div(({ theme }) => ({
  position: 'relative',
  zIndex: 10,
  minWidth: '30vw',
  maxWidth: '90vw',
  maxHeight: '68vh',
  margin: '0 auto 3rem',
  padding: '3rem',
  background: theme.color.white,
  textAlign: 'center',
  borderRadius: '1rem',
  overflowY: 'auto',

  [mq('desktop')]: {
    maxWidth: '60vw',
    maxHeight: '100vh',
    padding: '3rem 6rem',
  },
}));

const ModalWrapper = styled.div(() => ({
  width: '100%',
  maxHeight: '75vh',
}));

const ModalTitle = styled.h3(({ theme }) => ({
  marginBottom: '3rem',
  textAlign: 'center',
  fontSize: '1.6rem',
  fontWeight: theme.fontWeight.extra_bold,

  [mq('desktop')]: {
    marginBottom: '3rem',
    fontSize: '2.2rem',
  },
}));

const ModalButtons = styled.div(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0 0.8rem',
  margin: '3rem auto 0',
  width: '100%',
}));

interface ButtonActive {
  active?: boolean;
}

const ModalButton = styled.button<ButtonActive>(({ theme, active = false }) => ({
  width: '100%',
  minWidth: '8rem',
  padding: '1.2rem 0',
  background: active ? theme.color.orange500 : theme.color.white,
  color: active ? theme.color.white : theme.color.orange500,
  textAlign: 'center',
  borderRadius: '0.5rem',
  fontSize: '1.4rem',
  border: `1px solid ${theme.color.orange500}`,
}));

export const ModalInfo = styled.p(() => ({
  textAlign: 'center',
}));

interface ModalFactor {
  show: boolean;
  children: React.ReactNode;
  modalTitle: string;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  activeButtonName?: string;
  closeButtonName?: string;
  activeEvent?: any;
  noButton?: boolean;
  noCloseButton?: boolean;
}
function Modal({
  show,
  children,
  modalTitle,
  setModal,
  activeButtonName,
  closeButtonName = '취소',
  activeEvent,
  noButton,
  noCloseButton,
}: ModalFactor) {
  const closeModal = useCallback(() => {
    setModal(false);
  }, [setModal]);

  return show ? (
    <ModalPortal>
      <ModalContainer>
        <Overlay />

        <ModalIn>
          <ModalContents>
            <ModalWrapper>
              <ModalTitle>{modalTitle}</ModalTitle>
              {children}
              {noButton ? null : (
                <ModalButtons>
                  {!noCloseButton && (
                    <ModalButton type="button" onClick={closeModal}>
                      {closeButtonName}
                    </ModalButton>
                  )}
                  {activeButtonName !== undefined && (
                    <ModalButton type="button" active onClick={activeEvent}>
                      {activeButtonName}
                    </ModalButton>
                  )}
                </ModalButtons>
              )}
            </ModalWrapper>
          </ModalContents>
        </ModalIn>
      </ModalContainer>
    </ModalPortal>
  ) : null;
}

export default Modal;
