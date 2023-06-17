import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';

export function useUser() {
  const navigate = useNavigate();

  const tokens = sessionStorage.getItem('tokens');

  const parsedToken = tokens ? JSON.parse(tokens) : null;

  const clearUser = () => {
    sessionStorage.removeItem('tokens');
    navigate('/');
  };

  const isExpired = useMemo(() => {
    if (parsedToken !== null) {
      const parsedAccess = parsedToken.accessToken;
      const parsedRefresh = parsedToken.refreshToken;
      if (
        parsedAccess !== null &&
        dayjs.unix(parsedAccess.exp).diff(dayjs()) < 1 &&
        dayjs.unix(parsedRefresh.exp).diff(dayjs()) < 1
      ) {
        return true;
      }
    }
    return false;
  }, [parsedToken]);

  const isLoggedIn = !isExpired && sessionStorage.getItem('tokens') !== null;

  return { clearUser, isLoggedIn };
}
