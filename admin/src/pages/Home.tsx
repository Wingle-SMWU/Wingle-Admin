import Content from '@components/home/Content';
import Tabbar from '@components/home/Tabbar';
import styled from '@emotion/styled';
import { useAxios } from '@global-states/useAxios';
import { useUser } from '@global-states/useUser';
import { USER_LIST_API } from '@utils/apiUrl';
import { ADMIN_GET_LIST, ADMIN_TAB_LIST } from '@utils/constants';
import React, { useCallback, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import PageBtn from '../components/home/PageBtn';

const Wrapper = styled.div(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '150rem',
  backgroundColor: theme.color.white,
}));

function Home() {
  const [currIdx, setCurrIdx] = useState(0);
  const [page, setPage] = useState(1);

  const path = ADMIN_GET_LIST[currIdx];
  const status = ADMIN_TAB_LIST[currIdx];

  const axiosInstance = useAxios();
  const { isLoggedIn } = useUser();
  const navigate = useNavigate();

  const { data } = useQuery([path, { path, page }], async () => {
    try {
      const response = await axiosInstance.get(`${USER_LIST_API}/${path}/${page - 1}`);
      return response.data.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  });

  const handleClickTabBar = useCallback((idx: number) => {
    setCurrIdx(idx);
    setPage(1);
  }, []);

  useEffect(() => setPage(1), [currIdx]);

  useEffect(() => {
    if (!isLoggedIn) navigate('/login');
  }, [isLoggedIn, navigate]);

  return (
    <Wrapper>
      <Tabbar currIdx={currIdx} handleClickTabBar={handleClickTabBar} />
      <>
        <Content data={data?.list} status={status} />
        <PageBtn totalPages={data?.totalPages} page={page} setPage={setPage} />
      </>
    </Wrapper>
  );
}

export default Home;
