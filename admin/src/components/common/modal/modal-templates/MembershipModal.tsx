import React, { SetStateAction } from 'react';
import styled from '@emotion/styled';
import Modal from '../Modal';

interface ModalProps {
  modal: boolean;
  setModal: React.Dispatch<SetStateAction<boolean>>;
  buttonStatus: string;
  clickEvent?: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading?: boolean;
}

const RejectMessage = styled.div(() => ({
  marginBottom: '2.5rem',
}));

const MembershipModal = ({ modal, setModal, buttonStatus, clickEvent, isLoading }: ModalProps) => {
  return (
    <Modal
      show={modal}
      setModal={setModal}
      modalTitle={`정말 ${buttonStatus}하시겠습니까?`}
      activeButtonName="확인"
      closeButtonName="취소"
      activeEvent={clickEvent}
      noButton={isLoading}
    >
      {isLoading && <div>잠시만 기다려주세요 문구 or 로딩스피너</div>}
      {buttonStatus === '거절' && (
        <RejectMessage>확인을 누르면 거절사유가 전송됩니다.</RejectMessage>
      )}
    </Modal>
  );
};

export default MembershipModal;
