'use client';

import { useGetRooms } from '@/hooks/useGetRooms';
import { Box, Button, CircularProgress, Container, Grid, Icon, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Link from 'next/link';
import { Suspense, useEffect } from 'react';
import RoomCard from './RoomCard.component';

export default function WaitingRoom() {
  const { isLoading, isFetching, data } = useGetRooms();

  useEffect(() => {
    // console.log('data :>> ', data);
    // console.log('isLoading :>> ', isLoading);
    // console.log('isFetching :>> ', isFetching);
  }, []);

  return (
    <>
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

      {/* {errorMsg && <Typography>Failed to log in</Typography>} */}
    </>
  );
}
