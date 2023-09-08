import * as nextCookie from 'cookies-next';

type RequestOptions = RequestHeaders & RequestBody;

type RequestHeaders = {
  headers?: { [key: string]: any };
};

type RequestBody = {
  body?: { [key: string]: any };
};

type SuccessResponse<T = any> = {
  success: boolean;
  code: number;
  data: T;
  timestamp: number;
};

export type ErrorResponse = {
  success: boolean;
  code: number;
  errorId: string;
  message: string;
  error: string;
  stack: string[];
  timestamp: number;
  path: string;
};

export class ApiClient {
  private baseUrl: string;
  private headers: Record<string, string>;

  constructor(baseUrl?: string, headers?: Record<string, string>) {
    this.baseUrl = baseUrl || '/api';
    this.headers = headers || {};
  }

  private async request<T>(method: string, endpoint: string, queryParams?: Record<string, string>, data?: RequestOptions): Promise<T> {
    try {
      let url = `${this.baseUrl}${endpoint}`;
      const options: RequestInit = {
        method,
        headers: { ...this.headers },
      };

      const hasBearerToken = nextCookie.hasCookie('sessionToken');

      if (hasBearerToken) {
        const token = nextCookie.getCookie('sessionToken');
        (options.headers as any)['Authorization'] = `Bearer ${token}`;
      }

      if (queryParams) {
        const queryString = Object.keys(queryParams)
          .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`)
          .join('&');
        url += `?${queryString}`;
      }

      if (data) {
        (options.headers as any)['Content-Type'] = 'application/json';
        if (data?.body) {
          options.body = JSON.stringify(data.body);
        }
        if (data?.headers) {
          options.headers = { ...this.headers, ...data.headers };
        }
      }

        const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = (await response.json()) as SuccessResponse<T>;

      return responseData.data;
    } catch (error) {
      console.error('API Request Error:', error);
      throw error;
    }
  }

  async get<T>(endpoint: string, queryParams?: Record<string, string>, options?: RequestHeaders): Promise<T> {
    return this.request<T>('GET', endpoint, queryParams, options);
  }

  async post<T>(endpoint: string, data?: RequestOptions, queryParams?: Record<string, string>): Promise<T> {
    return this.request<T>('POST', endpoint, queryParams, data);
  }

  async put<T>(endpoint: string, data?: RequestOptions, queryParams?: Record<string, string>): Promise<T> {
    return this.request<T>('PUT', endpoint, queryParams, data);
  }

  async delete<T>(endpoint: string, queryParams?: Record<string, string>, options?: RequestHeaders): Promise<T> {
    return this.request<T>('DELETE', endpoint, queryParams, options);
  }
}
