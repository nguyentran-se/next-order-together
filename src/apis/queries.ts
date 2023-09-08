import { apiClient } from '@/app/layout';
import { API_URLS } from './api-url';
import { setCookie } from 'cookies-next';

interface postSignInResponseBody {
  accessToken: string;
}

export const postSignIn = async (code: string) => {
  const res = await apiClient.post<postSignInResponseBody>(API_URLS.signIn, { body: { code } });
  if (res.accessToken) {
    setCookie('sessionToken', res.accessToken);
  }
  return res;
};

export const getRooms = async () => {
  const res = await apiClient.get<any>(API_URLS.room);
  return res;
}