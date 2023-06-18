import { useMutation } from 'react-query';
import { ReactNode } from 'react';
import { useAxios } from '@global-states/useAxios';
import { TEMP_SAVE_API } from '@utils/apiUrl';

export default function usePostTemp(
  children: ReactNode,
  userId: string | undefined,
  val: { reject: string; memo: string },
) {
  const axiosInstance = useAxios();

  let path = '';
  let body = { userId };
  if (children === '거절사유') {
    path = 'rejection';
    Object.assign(body, { reason: val.reject });
  }
  if (children === '메모') {
    path = 'memo';
    Object.assign(body, { memo: val.memo });
  }

  const { mutate } = useMutation(() => axiosInstance.post(`${TEMP_SAVE_API}/${path}`, body), {
    onSuccess: () => alert('임시저장이 완료되었습니다.'),
  });

  return { mutate };
}
