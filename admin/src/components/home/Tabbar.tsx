import React from 'react';
import styled from '@emotion/styled';
import { ADMIN_TAB_LIST } from '@utils/constants';

type TabbarFactor = {
  currIdx: number;
  handleClickTabBar?: (idx: number) => void;
  status?: string;
};

const Wrapper = styled.div(({ theme }) => ({
  display: 'flex',
  gap: '2.4rem',
  height: '4.4rem',
  paddingLeft: theme.spacing.pcPadding,
  borderBottom: `1px solid ${theme.color.gray200}`,
}));

const Content = styled.div<{ status?: boolean }>(({ theme, status }) => ({
  display: 'flex',
  gap: '2rem',

  '& li': {
    display: 'flex',
    alignItems: 'center',
    cursor: status ? '' : 'pointer',
    color: status ? theme.color.black : theme.color.gray500,
    fontWeight: theme.fontWeight.bold,
    fontSize: '1.8rem',
    ':hover': {
      color: theme.color.gray900,
      borderBottom: status ? '' : `2px solid ${theme.color.orange500}`,
    },
    '&.selected': {
      color: theme.color.gray900,
      borderBottom: `2px solid ${theme.color.orange500}`,
    },
  },
}));

function Tabbar({ currIdx, handleClickTabBar, status }: TabbarFactor) {
  return (
    <Wrapper>
      <Content status={status === ADMIN_TAB_LIST[currIdx]}>
        {status && <li>{status}</li>}
        {!status &&
          ADMIN_TAB_LIST.map((tab: string, idx: number) => (
            <li
              key={tab}
              className={idx === currIdx ? 'selected' : ''}
              onClick={() => handleClickTabBar?.(idx)}
            >
              {tab}
            </li>
          ))}
      </Content>
    </Wrapper>
  );
}

export default Tabbar;
