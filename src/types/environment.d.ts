export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BASE_URL: string;
      ENV: 'test' | 'dev' | 'prod';
      NEXT_PUBLIC_BASE_URL: string
      NEXT_PRIVATE_BASE_API_URL: string;
      NEXT_PUBLIC_REDIRECT_URI: string;
      NEXT_PUBLIC_CLIENT_ID: string;
    }
  }
}