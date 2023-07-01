import { TertiaryButton } from '@components/common/buttons';
import styled from '@emotion/styled';
import usePostTemp from '@hooks/usePostTemp';
import { ADMIN_TAB_LIST } from '@utils/constants';
import React, { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { AdminUserResp } from 'types/userTypes';

type RejectFactor = {
  children: ReactNode;
  userId: string | undefined;
  inputs: { reject: string; memo: string };
  setInputs: React.Dispatch<React.SetStateAction<{ reject: string; memo: string }>>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: AdminUserResp;
  setButtonStatus?: React.Dispatch<React.SetStateAction<string>>;
};

const Wrapper = styled.div<{ modal: boolean }>(({ theme, modal }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '2rem 1.6rem',
  '> div': {
    display: 'flex',
    '> p': {
      display: 'flex',
      color: theme.color.gray900,
    },
    '> p:nth-of-type(1)': {
      width: '14.4rem',
      fontWeight: theme.fontWeight.bold,
    },
    '> p:nth-of-type(2)': {
      width: '78.8rem',
    },
    textarea: {
      width: '100%',
      height: '12rem',
      padding: '1.6rem',
      border: `1px solid ${theme.color.gray200}`,
      borderRadius: '0.8rem',
      color: theme.color.gray900,
      opacity: modal ? 0.2 : 1,
      resize: 'none',
    },
  },
}));

const ButtonGroup = styled.div(({ theme }) => ({
  justifyContent: 'flex-end',
  padding: '0.6rem 0',
  color: theme.color.gray600,
}));

function Reject({
  children,
  userId,
  isOpen,
  setIsOpen,
  inputs,
  setInputs,
  data,
  setButtonStatus,
}: RejectFactor) {
  const { mutate } = usePostTemp(children, userId, inputs);

  const location = useLocation();
  const { status } = location.state;

  const handleChangeReason = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.name === '거절사유') setInputs({ ...inputs, reject: e.target.value });
    if (e.target.name === '메모') setInputs({ ...inputs, memo: e.target.value });
  };

  const inputValue = children === '메모' ? data.memo : data.reason;

  return (
    <Wrapper modal={isOpen}>
      <div>
        <p>{children}</p>
        <textarea
          name={`${children}`}
          defaultValue={inputValue || ''}
          onChange={handleChangeReason}
        />
      </div>
      <ButtonGroup>
        {children === '거절사유' && (
          <TertiaryButton
            buttonName="거절 사유 전송"
            clickEvent={() => {
              setIsOpen(true);
              if (setButtonStatus) setButtonStatus('거절');
            }}
            active={status === ADMIN_TAB_LIST[0]}
          />
        )}
        {children === '메모' && (
          <TertiaryButton buttonName="내용 저장" clickEvent={() => mutate()} active />
        )}
      </ButtonGroup>
    </Wrapper>
  );
}

export default Reject;
