import styled from '@emotion/styled';
import React from 'react';
import { AdminUserResp } from 'types/userTypes';
import { mq } from '@utils/mediaquery';
import Profile from './Profile';
import Reject from './Reject';

type ContentsFactor = {
  data: AdminUserResp;
  userId: string | undefined;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  inputs: { reject: string; memo: string };
  setInputs: React.Dispatch<React.SetStateAction<{ reject: string; memo: string }>>;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
  setButtonStatus?: React.Dispatch<React.SetStateAction<string>>;
};

const ContentsWrapper = styled.form(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: `2rem ${theme.spacing.mobPadding}`,

  [mq('tablet')]: {
    padding: `2rem ${theme.spacing.tabPadding}`,
  },
  [mq('desktop')]: {
    padding: `2rem ${theme.spacing.pcPadding}`,
  },
}));

function Contents({
  data,
  userId,
  isOpen,
  setIsOpen,
  inputs,
  setInputs,
  handleSubmit,
  setButtonStatus,
}: ContentsFactor) {
  return (
    <ContentsWrapper id="form" onSubmit={handleSubmit}>
      <Profile data={data} />
      <Reject
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        inputs={inputs}
        setInputs={setInputs}
        userId={userId}
        data={data}
        setButtonStatus={setButtonStatus}
      >
        거절사유
      </Reject>
      <Reject
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        inputs={inputs}
        setInputs={setInputs}
        userId={userId}
        data={data}
      >
        메모
      </Reject>
    </ContentsWrapper>
  );
}

export default Contents;
