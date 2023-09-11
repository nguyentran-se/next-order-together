import { API_URLS } from '@/apis/api-url';
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

export const postCreateRoom = async (body: IPostCreateRoomRequest) => {
  const res = await apiClient.post<IPostCreateRoomResponse>(API_URLS.room, { body });
  return res;
};
