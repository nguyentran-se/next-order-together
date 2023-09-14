'use client';

import { useGetRooms } from '@/queries/useGetRooms';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, CircularProgress, Container, Grid, LinearProgress, Stack, Typography, keyframes } from '@mui/material';
import * as nextCookie from 'cookies-next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import CreateRoomModal from './CreateRoomModal';
import RoomCard from './RoomCard.component';

export default function WaitingRoom() {
  const { isLoading, isFetching, rooms, isError } = useGetRooms();
  const [isCreateRoomModalOpened, setCreateRoomModalOpened] = useState(false);
  const [isLoggedin, setLoggedin] = useState(false);
  useEffect(() => {
    const hasBearerToken = nextCookie.hasCookie('sessionToken');
    setLoggedin(hasBearerToken);
  }, []);

  const openCreateRoomModal = () => setCreateRoomModalOpened(true);
  const closeCreateRoomModal = () => setCreateRoomModalOpened(false);

  return (
    <>
      <CreateRoomModal open={isCreateRoomModalOpened} onClose={closeCreateRoomModal} />
      {isLoggedin && !isError && (
        <Container maxWidth={false} sx={{ pt: 2 }}>
          <Box paddingBottom={4}>
            <Stack direction="row" justifyContent="space-between">
              <Box>
                <Typography variant="h4">{`Today's Options`}</Typography>
              </Box>
              <Box>
                <Button
                  variant="contained"
                  onClick={openCreateRoomModal}
                  disableElevation
                  endIcon={
                    <AddIcon
                      sx={{
                        transform: 'translateY(-1px)',
                      }}
                    />
                  }
                >
                  Create new meal
                </Button>
              </Box>
            </Stack>
          </Box>
          {isLoading && (
            <Box textAlign="center">
              <CircularProgress />
            </Box>
          )}

          {!isLoading && isFetching && <LinearProgress />}
          {!isLoading && (
            <Box>
              <Grid container spacing={6}>
                {!!rooms &&
                  rooms.map((item, index) => {
                    return (
                      <Grid key={index} item xs={6} md={4} lg={3}>
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
