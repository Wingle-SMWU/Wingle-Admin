import styled from '@emotion/styled';
import { ADMIN_CONTENT_MENU, USER_NATIONALITY } from '@utils/constants';
import { formattedTime } from '@utils/index';
import { mq } from '@utils/mediaquery';
import React from 'react';
import { Link } from 'react-router-dom';
import { AdminUserResp } from 'types/userTypes';

type AdminUsersResp = {
  data: AdminUserResp[];
  count: number;
  status: string;
  page: number;
  currIdx?: number;
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

  '> li:nth-of-type(1)': {
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
    width: '10rem',
    [mq('tablet')]: {
      width: '12rem',
    },
    [mq('desktop')]: {
      width: '20rem',
    },
    '> p': {
      width: '18.2rem',
    },
  },
  '> li:nth-of-type(3)': {
    width: '10rem',
    [mq('tablet')]: {
      width: '10rem',
    },
    '> p': {
      width: '4.8rem',
    },
  },
  '> li:nth-of-type(4)': {
    width: '10rem',
    [mq('tablet')]: {
      width: '18rem',
      '> p': {
        width: '18rem',
      },
    },
    [mq('desktop')]: {
      width: '20rem',
      '> p': {
        width: '20rem',
      },
    },
  },
  '> li:nth-of-type(5)': {
    width: '10rem',
    [mq('tablet')]: {
      width: '14rem',
    },
    [mq('desktop')]: {
      width: '20rem',
    },
    '> p': {
      width: '8rem',
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
  '> li:nth-of-type(2)': {
    width: '10rem',
    [mq('tablet')]: {
      width: '12rem',
    },
    [mq('desktop')]: {
      width: '20rem',
    },
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
      color: nation === 'Republic of Korea' ? theme.color.gray600 : theme.color.orange400,
    },
  },
  '> li:nth-of-type(4)': {
    width: '12rem',
    [mq('tablet')]: {
      width: '20rem',
    },
    [mq('desktop')]: {
      width: '20rem',
    },
    '> p': {
      width: '10rem',
      [mq('tablet')]: {
        width: '16rem',
      },
      [mq('desktop')]: {
        width: '18.2rem',
      },
    },
  },
  '> li:nth-of-type(5)': {
    width: '10rem',
    [mq('tablet')]: {
      width: '16rem',
    },

    [mq('desktop')]: {
      width: '20rem',
    },
    '> p': {
      width: '10rem',
      [mq('tablet')]: {
        width: '12rem',
      },
      [mq('desktop')]: {
        width: '14rem',
      },
    },
  },
}));

function Content({ data, status, count, page, currIdx }: AdminUsersResp) {
  return (
    data && (
      <Wrapper>
        <Menu>
          {ADMIN_CONTENT_MENU.map((menu, idx) => (
            <li key={menu[1]}>
              <p>{idx === 3 ? menu[currIdx || 0] : menu}</p>
            </li>
          ))}
        </Menu>

        <div>
          {data?.map((user, idx) => {
            return (
              <Link
                key={user.userId}
                to={`/detail/${user.userId}`}
                state={{ status, no: count - (10 * (page - 1) + idx) }}
              >
                <Item nation={user.nation}>
                  <li>
                    <p>{count - (10 * (page - 1) + idx)}</p>
                  </li>
                  <li>
                    <p>{user.name}</p>
                  </li>
                  <li>
                    <p>
                      {user.nation === 'Republic of Korea'
                        ? USER_NATIONALITY[0]
                        : USER_NATIONALITY[1]}
                    </p>
                  </li>
                  <li>
                    <p>{formattedTime(user.updatedTime)}</p>
                  </li>
                  <li>
                    <p>{user.schoolName}</p>
                  </li>
                </Item>
              </Link>
            );
          })}
        </div>
      </Wrapper>
    )
  );
}

export default Content;
