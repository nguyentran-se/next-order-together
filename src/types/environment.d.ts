export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BASE_URL: string;
      ENV: 'test' | 'dev' | 'prod';
      NEXT_PUBLIC_BASE_URL: string
      NEXT_PRIVATE_BASE_API_URL: string;
    }
  }
}