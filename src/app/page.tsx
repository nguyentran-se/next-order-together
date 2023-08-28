import Image from 'next/image';
import styles from './page.module.css';
import { Metadata } from 'next';
import { Box } from '@mui/material';
import SideBar from '@/components/SideBar.component';
import NavBar from '@/components/NavBar.component.';
import ContentArea from '@/components/ContentArea.component';

// For SEO - Just for TESTING
export const metadata: Metadata = {
  title: 'Order Together',
  description: "Let's order food and drinks together",
};

export default function Home() {
  return (
    <main>
      <Box>
        <SideBar></SideBar>
        <Box></Box>
        <NavBar></NavBar>
        <ContentArea></ContentArea>
      </Box>
    </main>
  );
}
