import { useSidebarStore } from '@/hooks/useSidebarStore';
import { Container } from '@mui/material';
import React from 'react';

export default function ContentArea({ children }: { children: React.ReactNode }) {
  return (
    <Container
      maxWidth={false}
      sx={{
        mt: {
          xs: '0px',
          md: '70px',
        },
        paddingTop: '10px',
      }}
    >
      {children}
    </Container>
  );
}
