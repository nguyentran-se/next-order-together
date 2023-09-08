'use client';

import { Metadata } from 'next';

// For SEO - Just for TESTING
// export const metadata: Metadata = {
//   title: 'Order Together',
//   description: "Let's order food and drinks together",
// };

// Move Dashboard into a separate route later
export default function Dashboard() {
  return (
    <>Dashboard
      <a href='https://slack.com/openid/connect/authorize?scope=openid%20email%20profile&amp;response_type=code&amp;redirect_uri=https%3A%2F%2Flocalhost%3A8081&amp;client_id=2697222791.5807891074339'>
        Sign in with Slack open id
      </a>
      <a href='https://slack.com/oauth/v2/authorize?redirect_uri=https%3A%2F%2Flocalhost%3A8081%2F&amp;client_id=2697222791.5807891074339'>
        Add to Slack
      </a>
    </>
  );
}
