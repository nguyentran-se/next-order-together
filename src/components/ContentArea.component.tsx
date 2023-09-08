import { Container } from '@mui/material';
import React from 'react';

export default function ContentArea({ children }: { children: React.ReactNode }) {
  return (
    <Container
      maxWidth={false}
      sx={{
        paddingTop: '10px',
      }}
    >
      {children}
    </Container>
  );
}
