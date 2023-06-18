import { useAxios } from '@global-states/useAxios';
import { USER_DETAIL_API } from '@utils/apiUrl';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import usePostPermission from './usePostPermission';

export default function useDetailDispatch() {
  const location = useLocation();
  const axiosInstance = useAxios();

  const [isOpen, setIsOpen] = useState(false);
  const [buttonStatus, setButtonStatus] = useState('');
  const [buttonActive, setButtonActive] = useState(false);
  const userId = location.pathname.split('/').at(-1);
  const [inputs, setInputs] = useState({
    reject: '',
    memo: '',
  });

  const { data } = useQuery(['getUser', userId], () =>
    axiosInstance?.get(`${USER_DETAIL_API}/waiting/${userId}`),
  );

  const { mutate, isLoading } = usePostPermission(userId, inputs.reject);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setButtonActive(true);
    mutate();
  };

  return {
    data,
    userId,
    isOpen,
    buttonStatus,
    setButtonStatus,
    buttonActive,
    setIsOpen,
    inputs,
    setInputs,
    handleSubmit,
    isLoading,
  };
}
