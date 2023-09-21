import { API_URLS } from '@/apis/api-url';
import { IRoom } from '../../interfaces';
import { apiClient } from '@/app/layout';

export interface IPostCreateRoomRequest {
  scrapingUrl: string;
  dueTime: string;
  alias: string;
}

export interface IPostCreateRoomResponse {
  scrapingUrl: string;
  dueTime: string;
  alias: string;
}

export const getRooms = async () => {
  const res = await apiClient.get<any>(API_URLS.room);
  return res;
};

export const getRoom = async (id: string) => {
  const url = `${API_URLS.room}/${id}`;
  const res = await apiClient.get<IRoom>(url);
  return res;
};

export const postCreateRoom = async (body: IPostCreateRoomRequest) => {
  const res = await apiClient.post<IPostCreateRoomResponse>(API_URLS.room, { body });
  return res;
};
