'use client';

import { Metadata } from 'next';

// For SEO - Just for TESTING
export const metadata: Metadata = {
  title: 'Order Together',
  description: "Let's order food and drinks together",
};

// Move Dashboard into a separate route later
export default function Dashboard() {
  return (
    <>Dashboard</>
  );
}
