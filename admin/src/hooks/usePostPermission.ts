import { useAxios } from '@global-states/useAxios';
import { PERMISSION_API } from '@utils/apiUrl';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

export default function usePostPermission(
  userId: string | undefined,
  reason: string | null | undefined,
) {
  const navigate = useNavigate();
  const axiosInstance = useAxios();

  const path = reason ? 'rejection' : 'acceptance';

  const body = { userId };

  if (reason) Object.assign(body, { reason: reason });

  const { mutate, isLoading, error } = useMutation(
    () => axiosInstance?.post(`${PERMISSION_API}/${path}`, body),
    {
      onSuccess: () => navigate('/'),
      onError: () => alert('잠시 후에 시도해주세요'),
    },
  );

  return { mutate, isLoading, error };
}
