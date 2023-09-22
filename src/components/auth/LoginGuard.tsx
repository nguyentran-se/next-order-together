'use client';

import { getIsLoggedin } from '@/utils';
import { Box, CircularProgress, Typography } from '@mui/material';
import { useLayoutEffect, useState } from 'react';

function LogInGuard({ children }: { children: React.ReactNode }) {
  const [loggedInStatus, setLoggedInStatus] = useState<string>();
  useLayoutEffect(() => {
    setLoggedInStatus(getIsLoggedin() ? 'Y' : 'N');
  }, []);

  const isLoggedIn = loggedInStatus === 'Y';
  return (
    <>
      {loggedInStatus ? (
        <>{isLoggedIn ? <>{children}</> : <Typography>Please log in to proceed</Typography>}</>
      ) : (
        <Box textAlign="center">
          Building app...
        </Box>
      )}
    </>
  );
}

export default LogInGuard;
