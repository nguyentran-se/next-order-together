'use client';

import { useGetRooms } from '@/queries/useGetRooms';
import AddIcon from '@mui/icons-material/Add';
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Stack,
  Typography
} from '@mui/material';
import * as nextCookie from 'cookies-next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import CreateRoomModal from './CreateRoomModal';
import RoomCard from './RoomCard.component';


export default function WaitingRoom() {
  const { isLoading, isFetching, data, isError } = useGetRooms();
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
      <CreateRoomModal open={isCreateRoomModalOpened} onClose={closeCreateRoomModal}/>
      {isLoggedin && !isError && (
        <Container maxWidth={false} sx={{ pt: 2 }}>
          <Box paddingBottom={4}>
            <Stack direction="row" justifyContent="space-between">
              <Box>
                <Typography variant="h4">{`Today's Options`}</Typography>
              </Box>
              <Box>
                <Button variant="contained" onClick={openCreateRoomModal}>
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
