import { Metadata } from 'next';
import { Suspense } from 'react';
import Card from './Card.component';

// For SEO - Just for TESTING
export const metadata: Metadata = {
  title: 'Order Together',
  description: "Let's order food and drinks together",
};

// Move Dashboard into a separate route later
export default function Dashboard() {
  return (
    <>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>loading... on initial request</p>}>
        <Card />
      </Suspense>
    </>
  );
}
