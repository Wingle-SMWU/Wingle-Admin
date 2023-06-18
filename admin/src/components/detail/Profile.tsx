import styled from '@emotion/styled';
import { USER_NATIONALITY } from '@utils/constants';
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
    padding: '2rem 1.6rem',
    '> p': {
      // padding: '2rem 1.6rem',
      color: theme.color.gray900,
    },
    '> p:nth-of-type(1)': {
      width: '14.4rem',
      fontWeight: theme.fontWeight.bold,
    },
    '> p:nth-of-type(2)': {
      width: '78.8rem',
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
