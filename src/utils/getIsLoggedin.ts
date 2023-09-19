import * as nextCookie from 'cookies-next';
import { useEffect, useState } from 'react';

export enum LoggedInStatus {
  PENDING,
  UNAUTHORIZED,
  AUTHORIZED,
}

export const getIsLoggedin = () => {
  return nextCookie.hasCookie('sessionToken');
};

export const useGetLoggedInStatus = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(LoggedInStatus.PENDING);
  useEffect(() => setIsLoggedIn(getIsLoggedin() ? LoggedInStatus.AUTHORIZED : LoggedInStatus.UNAUTHORIZED), []);
  return { status: isLoggedIn };
};
