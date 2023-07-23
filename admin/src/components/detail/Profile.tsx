import styled from '@emotion/styled';
import { USER_NATIONALITY } from '@utils/constants';
import { mq } from '@utils/mediaquery';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { AdminUserResp } from 'types/userTypes';
import { formattedTime, getKrNationByCode } from '@utils/index';
import ProfileInfo from './ProfileInfo';

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
  const country = getKrNationByCode(data?.nation) || '';
  const time = formattedTime(data?.createdTime) || '';

  return (
    <Wrapper>
      <ProfileInfo title="No" info={location.state.no} />
      <ProfileInfo title="가입신청일" info={time} />
      <ProfileInfo
        title="구분"
        info={data.nation === 'KR' ? USER_NATIONALITY[0] : USER_NATIONALITY[1]}
      />
      <ProfileInfo title="이름" info={data.name} />
      <ProfileInfo title="국적" info={country} />
      <ProfileInfo title="성별" info={data.gender ? '여자' : '남자'} />
      <ProfileInfo title="학교" info={data.schoolName} />
      <ProfileInfo title="학과" info={data.departmentName} />
      <ProfileInfo title="학번" info={data.studentNumber} />
      <ProfileInfo title="닉네임" info={data.nickname} />
      <ProfileInfo title="이메일" info={data.email} />
    </Wrapper>
  );
}

export default Profile;
