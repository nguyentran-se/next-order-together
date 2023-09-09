'use client';

import { useGetRooms } from '@/hooks/useGetRooms';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, CircularProgress, Container, Grid, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import RoomCard from './RoomCard.component';
import * as nextCookie from 'cookies-next';

export default function WaitingRoom() {
  const { isLoading, isFetching, data, isError, failureReason } = useGetRooms();
  const [isLoggedin, setLoggedin] = useState(false);
  useEffect(() => {
    const hasBearerToken = nextCookie.hasCookie('sessionToken');
    setLoggedin(hasBearerToken);
  }, []);

  return (
    <>
      {isLoggedin &&!isError && (
        <Container maxWidth={false} sx={{ pt: 2 }}>
          <Box paddingBottom={4}>
            <Stack direction="row" justifyContent="space-between">
              <Box>
                <Typography variant="h4">{`Today's Options`}</Typography>
              </Box>
              <Box>
                <Button variant="contained">
                  <Typography>Create new meal</Typography>
                  <AddIcon />
                </Button>
              </Box>
            </Stack>
          </Box>
          {isLoading && (
            <Box textAlign="center">
              <CircularProgress />
            </Box>
          )}
          {!isLoading && isFetching && <>Fetching ...</>}
          {!isLoading && (
            <Box>
              <Grid container spacing={6}>
                {!!data &&
                  data.map((item, index) => {
                    return (
                      <Grid key={index} item xs={6} md={4}>
                        <Link href={`rooms/${item.id}`}>
                          <RoomCard key={index} table={item} />
                        </Link>
                      </Grid>
                    );
                  })}
              </Grid>
            </Box>
          )}
        </Container>
      )}
      {isLoggedin && isError && <Typography>Failed to get rooms</Typography>}
      {!isLoggedin && <Typography>Please log in to proceed</Typography>}
    </>
  );
}
