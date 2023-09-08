'use client';

import { postSignIn } from '@/apis/queries';
import { Metadata } from 'next';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import { Typography } from '@mui/material';

// For SEO - Just for TESTING
// export const metadata: Metadata = {
//   title: 'Order Together',
//   description: "Let's order food and drinks together",
// };

// Move Dashboard into a separate route later
export default function Dashboard() {
  const [isLoggedin, setLoggedin] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  useEffect(() => {
    if (code) {
      postSignIn(code)
        .then((res) => {
          setLoggedin(true);
        })
        .catch((err) => {
          setErrorMsg(err);
        });
    }
  }, [code]);

  return (
    <>
      Dashboard
      <a href="https://slack.com/openid/connect/authorize?scope=openid%20email%20profile&amp;response_type=code&amp;redirect_uri=https%3A%2F%2Flocalhost%3A8081&amp;client_id=2697222791.5807891074339">
        Sign in with Slack open id
      </a>
      <a href="https://slack.com/oauth/v2/authorize?redirect_uri=https%3A%2F%2Flocalhost%3A8081%2F&amp;client_id=2697222791.5807891074339">
        Add to Slack
      </a>
    </>
  );
}
