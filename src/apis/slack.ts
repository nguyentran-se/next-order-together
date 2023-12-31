import { apiClient } from '@/app/layout';

export default class Slack {
  private configuration: any;

  constructor() {
    this.configuration = this.intializeConfiguration();
  }

  intializeConfiguration = () => {
    const __DEV__ = process.env.NODE_ENV === 'development';
    const localhost = 'https://localhost:3000/';
    return {
      client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
      redirect_uri: __DEV__ ? localhost : process.env.NEXT_PUBLIC_REDIRECT_URI,
      client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      response_type: 'code',
      scope: 'openid%20profile%20email',
    };
  };

  createAuthRequest = (config: any = this.configuration, isOpenid: boolean = true) => {
    return 'https://slack.com/openid/connect/authorize?scope=openid%20email%20profile&amp;response_type=code&amp;redirect_uri=https%3A%2F%2Flocalhost%3A8081&amp;client_id=2697222791.5807891074339';
    const requestInitial = 'https://slack.com/openid/connect/authorize?';
    return Object.keys(config).reduce(
      (total, key, index) => total + key + '=' + config[key] + (index === Object.keys(config).length - 1 ? '' : '&'),
      requestInitial,
    );
  };

  getOpenIdUrl() {
    const __DEV__ = process.env.NODE_ENV === 'development';

    const openIdUrl = 'https://slack.com/openid/connect/authorize';
    const url = new URL(openIdUrl);
    url.searchParams.append('scope', 'openid,email,profile');
    url.searchParams.append('response_type', 'code');
    url.searchParams.append('redirect_uri', __DEV__ ? 'https://localhost:8081/' : process.env.NEXT_PUBLIC_REDIRECT_URI + '/' );
    url.searchParams.append('client_id', process.env.NEXT_PUBLIC_CLIENT_ID);
    return url.toString();
  }

  // createExchangeTokenPostRequest = (code: string) => {
  //   const url = 'https://slack.com/api/openid.connect.token';
  //   const __DEV__ = process.env.NODE_ENV === 'development';
  //   const localhost = 'https://localhost:3000/';
  //   const reqBody = {
  //     code,
  //     client_id: process.env.NEXT_PUBLIC_CLIENT_ID as string,
  //     client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET as string,
  //     redirect_uri: __DEV__ ? localhost : (process.env.NEXT_PUBLIC_REDIRECT_URI as string),
  //   };
  //   // const urlEncodedBody = new URLSearchParams(Object.entries(reqBody)).toString();
  //   const options = {
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //   };
  //   return apiClient.post(url, reqBody, options);
  // };
}
