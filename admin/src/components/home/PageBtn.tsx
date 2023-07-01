import styled from '@emotion/styled';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Pagination from 'react-js-pagination';

type AdminUsersResp = {
  totalPages: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const Button = styled.ul<{ page: number }>(({ theme, page }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: `0.4rem 2rem`,
  width: '100%',
  '.pagination': {
    display: 'flex',
    gap: '0.6rem',
    padding: '0.4rem 0.8rem',
  },
  'ul.pagination li': {
    display: 'inline-block',
    width: '4rem',
    height: '4rem',
    lineHeight: '  4rem',
    textAlign: 'center',
    color: theme.color.gray500,
    '&:nth-of-type(1), &:last-child': {
      display: 'none',
    },
    '&:nth-of-type(2)': {
      visibility: page === 1 ? 'hidden' : 'visible',
    },
    '&:nth-last-of-type(2) a': {
      color: theme.color.gray700,
    },
    'ul.pagination li a': {
      fontStyle: 'normal',
      color: theme.color.gray500,
    },
    '&:hover, &.active': {
      background: theme.color.gray200,
      borderRadius: '0.8rem',
      cursor: 'pointer',
      '> a': {
        color: theme.color.gray900,
      },
    },
  },
}));

function PageBtn({ totalPages, page, setPage }: AdminUsersResp) {
  const handleChangePage = (e: number) => {
    setPage(e);
  };

  return (
    <Button page={page}>
      {totalPages > 0 && (
        <Pagination
          activePage={page}
          itemsCountPerPage={10}
          totalItemsCount={totalPages * 10 || 1}
          pageRangeDisplayed={5}
          prevPageText="<"
          nextPageText=">"
          onChange={handleChangePage}
        />
      )}
    </Button>
  );
}

export default PageBtn;
