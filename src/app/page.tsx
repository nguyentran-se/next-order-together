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
  return <>Dashboard</>;
}
