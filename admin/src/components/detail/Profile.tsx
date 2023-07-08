import styled from '@emotion/styled';
import { USER_NATIONALITY } from '@utils/constants';
import { mq } from '@utils/mediaquery';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { AdminUserResp } from 'types/userTypes';

type ProfileFactor = {
  data: AdminUserResp;
};

const Wrapper = styled.div(({ theme }) => ({
  '> div': {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '6rem',
    borderBottom: `1px solid ${theme.color.gray200}`,
    [mq('tablet')]: {
      padding: '2rem 1.6rem',
    },
    '> p': {
      color: theme.color.gray900,
    },
    '> p:nth-of-type(1)': {
      width: '10rem',
      fontWeight: theme.fontWeight.bold,
      [mq('tablet')]: {
        width: '12rem',
      },
      [mq('desktop')]: {
        width: '14.4rem',
      },
    },
    '> p:nth-of-type(2)': {
      width: '20rem',
      [mq('tablet')]: {
        width: '50rem',
      },
      [mq('desktop')]: {
        width: '78.8rem',
      },
    },
  },
}));

function Profile({ data }: ProfileFactor) {
  const location = useLocation();

  return (
    <Wrapper>
      <div>
        <p>No</p>
        <p>{location.state.no}</p>
      </div>
      <div>
        <p>이름</p>
        <p>{data.name}</p>
      </div>
      <div>
        <p>구분</p>
        <p>{data.nation === 'KR' ? USER_NATIONALITY[0] : USER_NATIONALITY[1]}</p>
      </div>
      <div>
        <p>가입신청일</p>
        <p>{data.createdTime.split('T')[0]}</p>
      </div>
    </Wrapper>
  );
}

export default Profile;
