import { API_URLS } from "@/apis/api-url";
import { Order } from "../../interfaces/order.interface";
import { apiClient } from "@/app/layout";

export interface IPostCreateOrderRequest {
  roomId: string;
  dishes: {
    id: string;
    quantity: number;
  }[];
}

export const getOrders = async () => {
  const url = `${API_URLS.orders}/me`;
  const res = await apiClient.get<Order[]>(url);
  return res;
}

export const postCreateOrder = async (body: IPostCreateOrderRequest) => {
  const res = await apiClient.post<any>(API_URLS.orders, { body });
  return res;
};
