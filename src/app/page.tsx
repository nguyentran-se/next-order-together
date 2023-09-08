'use client';

import { postSignIn } from '@/apis/queries';
import { Metadata } from 'next';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { slack } from './layout';

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
      <a href={`${slack.getOpenIdUrl()}`}>Add to Slack</a>
    </>
  );
}

