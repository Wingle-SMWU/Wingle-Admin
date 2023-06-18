import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { DecodedRefreshTokenType, DecodedTokenType } from 'types/accountTypes';
import dayjs from 'dayjs';
import { TOKEN_API_URL } from '@utils/apiUrl';

export function useAxios() {
  const navigate = useNavigate();

  const token = sessionStorage.getItem('tokens');
  let newToken = '';

  const parsedToken = token ? JSON.parse(token) : null;

  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    headers: { Authorization: `Bearer ${parsedToken?.accessToken}` },
  });

  const clearUser = () => {
    sessionStorage.removeItem('tokens');
    alert('다시 로그인해주세요.');
    navigate('/');
  };

  axiosInstance.interceptors.request.use(
    async (req) => {
      const user: DecodedTokenType = parsedToken?.accessToken;

      const decodedRefreshToken: DecodedRefreshTokenType = parsedToken?.refreshToken;
      const isExpired = dayjs.unix(user?.exp).diff(dayjs()) < 1;

      if (!isExpired) return req;

      const isExpriedRefToken = dayjs.unix(decodedRefreshToken.exp).diff(dayjs()) < 1;

      if (isExpriedRefToken) {
        clearUser();
      } else {
        try {
          const res = await axiosInstance.post(TOKEN_API_URL, {
            refreshToken: parsedToken.refreshToken,
          });

          if (res.status === 200) {
            newToken = res?.data.data;
            const newTokens = {
              accessToken: newToken,
              refreshToken: parsedToken.refreshToken,
            };
            sessionStorage.setItem('tokens', JSON.stringify(newTokens));
            req.headers['Authorization'] = `Bearer ${newTokens.accessToken}`;
          }
        } catch (error: any) {
          console.log(error.response.status);
          if (error.response?.status === 400) {
            clearUser();
          } else if (error.response?.status === 401) {
            clearUser();
          }
        }
      }
      return req;
    },
    (error) => {
      if (error.response.status === 400) {
        console.log(error);
      }
    },
  );

  return axiosInstance;
}
