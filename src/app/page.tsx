import Image from 'next/image';
import styles from './page.module.css';
import { Metadata } from 'next';

// For SEO - Just for TESTING
export const metadata: Metadata = {
  title: 'Order Together',
  description: "Let's order food and drinks together",
};

export default function Home() {
  return (
    <main>
      <h1>HomePage</h1>
    </main>
  );
}
