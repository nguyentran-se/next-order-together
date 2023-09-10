import * as nextCookie from 'cookies-next';

export const getIsLoggedin = () => {
  return nextCookie.hasCookie('sessionToken');
};
