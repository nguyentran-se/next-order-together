import { apiClient } from '@/app/layout';
import { API_URLS } from './api-url';
import { setCookie } from 'cookies-next';
import { IRoom } from '@/app/_interfaces';

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

export const getRoom = async (id: string) => {
  const url = `${API_URLS.room}/${id}`
  const res = await apiClient.get<IRoom>(url);
  return res;
}