import { API_URLS } from "@/apis/api-url";
import { IProfile } from "../../interfaces/profile.interface";
import { apiClient } from "@/app/layout";

export const getUser = async () => {
  const url = `${API_URLS.profile}/me`;
  const res = await apiClient.get<IProfile>(url);
  return res;
}