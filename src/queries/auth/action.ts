import { API_URLS } from '@/apis/api-url';
import { apiClient } from '@/app/layout';
import { setCookie } from 'cookies-next';

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
