import { apiClient } from '@/app/layout';
import { API_URLS } from '../apis/api-url';
import { setCookie } from 'cookies-next';
import { IRoom } from '@/app/_interfaces';

interface postSignInResponseBody {
  accessToken: string;
}

/**
 * @param code 
 * @description to get access token
 * @returns postSignInResponseBody
 */
export const postSignIn = async (code: string) => {
  const res = await apiClient.post<postSignInResponseBody>(API_URLS.signIn, { body: { code } });
  if (res.accessToken) {
    setCookie('sessionToken', res.accessToken);
  }
  return res;
};

/**
 * @description to get all available rooms
 * @returns IRoom[]
 */
export const getRooms = async () => {
  const res = await apiClient.get<any>(API_URLS.room);
  return res;
};

/**
 * @param id
 * @description to get room with corresponding room id
 * @returns IRoom
 */
export const getRoom = async (id: string) => {
  const url = `${API_URLS.room}/${id}`;
  const res = await apiClient.get<IRoom>(url);
  return res;
};
