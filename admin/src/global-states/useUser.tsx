import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';

export function useUser() {
  const navigate = useNavigate();

  const isAutoLogin = localStorage.getItem('autoLogin');

  const tokens =
    isAutoLogin === 'true' ? localStorage.getItem('tokens') : sessionStorage.getItem('tokens');

  const parsedToken = tokens ? JSON.parse(tokens) : null;

  const clearUser = () => {
    localStorage.removeItem('autoLogin');
    localStorage.removeItem('tokens');
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

  const isLoggedIn =
    !isExpired &&
    (localStorage.getItem('tokens') !== null || sessionStorage.getItem('tokens') !== null);

  return { clearUser, isLoggedIn };
}
