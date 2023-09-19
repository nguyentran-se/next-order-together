'use client'

import { getIsLoggedin } from '@/utils';
import { Box, CircularProgress, Typography } from '@mui/material';
import { usePathname } from 'next/navigation';
import { useEffect, useLayoutEffect, useState } from 'react';
import { whitelist } from './whitelist';


function LogInGuard({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();
  const [loggedInStatus, setLoggedInStatus] = useState<string>();

  const isLoggedIn = loggedInStatus === 'Y';
  // Decide route doesn't require authentication
  const isWhitelisted = whitelist.includes(pathName);
  
  useLayoutEffect(() => {
    setLoggedInStatus(getIsLoggedin() ? 'Y' : 'N');
  }, []);

  return (
    <>
      {loggedInStatus ? (
        <>{isLoggedIn ? <>{ children }</> : <Typography>Please log in to proceed</Typography>}</>
      ) : (
        <Box textAlign="center">
          Starting app ...
        </Box>
      )}
    </>
  );
}

export default LogInGuard;
