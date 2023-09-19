import { apiClient } from '@/app/layout';
import { API_URLS } from '../apis/api-url';
import { setCookie } from 'cookies-next';
import { IRoom, MyRoom } from '@/app/_interfaces';
import { IProfile } from '@/app/_interfaces/profile.interface';
import { Order } from '@/app/_interfaces/order.interface';

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

/**--------------------Room----------------------*/
export const getRooms = async () => {
  const res = await apiClient.get<IRoom[]>(API_URLS.room);
  return res;
};

export const getRoom = async (id: string) => {
  const url = `${API_URLS.room}/${id}`;
  const res = await apiClient.get<IRoom>(url);
  return res;
};

export const getMyRooms= async () => {
  const url = `${API_URLS.room}/me`;
  const res = await apiClient.get<MyRoom[]>(url);
  return res;
};

/**--------------------User----------------------*/
export const getUser = async () => {
  const url = `${API_URLS.profile}/me`;
  const res = await apiClient.get<IProfile>(url);
  return res;
}

/**--------------------Order----------------------*/
export const getOrders = async () => {
  const url = `${API_URLS.orders}/me`;
  const res = await apiClient.get<Order[]>(url);
  return res;
}