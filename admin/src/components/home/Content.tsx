import styled from '@emotion/styled';
import { ADMIN_CONTENT_MENU, USER_NATIONALITY } from '@utils/constants';
import { formattedTime } from '@utils/index';
import { mq } from '@utils/mediaquery';
import React from 'react';
import { Link } from 'react-router-dom';
import { AdminUserResp } from 'types/userTypes';

type AdminUsersResp = {
  data: AdminUserResp[];
  status: string;
};

const Wrapper = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  margin: `0 ${theme.spacing.mobPadding}`,

  '& a': {
    textDecoration: 'none',
  },

  [mq('tablet')]: {
    margin: `0 ${theme.spacing.tabPadding}`,
  },

  [mq('desktop')]: {
    margin: `0 ${theme.spacing.pcPadding}`,
  },
}));

const Menu = styled.ul(({ theme }) => ({
  display: 'flex',
  marginTop: '1rem',
  background: theme.color.gray100,

  '& li': {
    display: 'flex',
    flexDirection: 'column',
    padding: '1.2rem 1.6rem',
    gap: '0.8rem',
  },

  '& p': {
    height: '2rem',
    color: theme.color.gray600,
  },

  '> li:nth-of-type(1), li:nth-of-type(4)': {
    width: '6rem',
    [mq('tablet')]: {
      width: '10rem',
    },
    [mq('desktop')]: {
      width: '11.2rem',
    },
    '> p': {
      width: '8rem',
    },
  },
  '> li:nth-of-type(2)': {
    width: '12.2rem',
    [mq('tablet')]: {
      width: '19rem',
    },
    [mq('desktop')]: {
      width: '21.4rem',
    },
    '> p': {
      width: '18.2rem',
    },
  },
  '> li:nth-of-type(3)': {
    width: '8rem',
    [mq('tablet')]: {
      width: '8.8rem',
    },
    '> p': {
      width: '4.8rem',
    },
  },
}));

const Item = styled.ul<{ nation: string | null }>(({ theme, nation }) => ({
  display: 'flex',
  width: '100%',
  borderBottom: `1px solid ${theme.color.gray200}`,
  '&:hover': {
    cursor: 'pointer',
    '> li:nth-of-type(2)': {
      opacity: '70%',
    },
  },
  '& li': {
    padding: '1.6rem',
  },
  '& p': {
    width: '1.8rem',
    height: '2.2rem',
    color: theme.color.gray900,
    lineHeight: 1.6,
  },
  '> li:nth-of-type(1)': {
    '> p': {
      width: '3rem',
      [mq('tablet')]: {
        width: '7rem',
      },
      [mq('desktop')]: {
        width: '8rem',
      },
    },
  },
  '> li:nth-of-type(2), li:nth-of-type(4)': {
    '> p': {
      width: '9rem',
      [mq('tablet')]: {
        width: '16rem',
      },
      [mq('desktop')]: {
        width: '18.2rem',
      },
    },
  },
  '> li:nth-of-type(3)': {
    width: '5.8rem',
    padding: '0.3rem 1.2rem',
    margin: 'auto 2rem auto 0',
    border: `1px solid ${theme.color.gray200}`,
    borderRadius: '2rem',

    [mq('tablet')]: {
      marginRight: '2.8rem',
    },

    [mq('desktop')]: {
      marginRight: '3rem',
    },

    '> p': {
      width: '4rem',
      height: '1.7rem',
      fontWeight: theme.fontWeight.bold,
      fontSize: '1.2rem',
      lineHeight: '1.8rem',
      color: nation === 'KR' ? theme.color.gray600 : theme.color.orange400,
    },
  },
}));

function Content({ data, status }: AdminUsersResp) {
  return (
    <Wrapper>
      <Menu>
        {ADMIN_CONTENT_MENU.map((menu: string) => (
          <li key={menu}>
            <p>{menu}</p>
          </li>
        ))}
      </Menu>
      <div>
        {data?.map((user, idx) => {
          return (
            <Link
              key={user.userId}
              to={`/detail/${user.userId}`}
              state={{ status, no: data.length - idx }}
            >
              <Item nation={user.nation}>
                <li>
                  <p>{data.length - idx}</p>
                </li>
                <li>
                  <p>{user.name}</p>
                </li>
                <li>
                  <p>{user.nation === 'KR' ? USER_NATIONALITY[0] : USER_NATIONALITY[1]}</p>
                </li>
                <li>
                  <p>{formattedTime(user.createdTime)}</p>
                </li>
              </Item>
            </Link>
          );
        })}
      </div>
    </Wrapper>
  );
}

export default Content;
