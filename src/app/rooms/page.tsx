'use client';

import { useGetRooms } from '@/queries/useGetRooms';
import { getIsLoggedin } from '@/utils/getIsLoggedin';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, CircularProgress, Container, Grid, LinearProgress, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import CreateRoomModal from './CreateRoomModal';
import RoomCard from './RoomCard.component';
import { useSidebarStore } from '@/hooks/useSidebarStore';

export default function WaitingRoom() {
  const { isLoading, isFetching, rooms, isError } = useGetRooms();
  const [isCreateRoomModalOpened, setCreateRoomModalOpened] = useState(false);
  const { isSidebarCollapsed } = useSidebarStore();
  const [isLoggedin, setLoggedin] = useState(false);
  useEffect(() => {
    setLoggedin(getIsLoggedin);
  }, []);

  const openCreateRoomModal = () => setCreateRoomModalOpened(true);
  const closeCreateRoomModal = () => setCreateRoomModalOpened(false);

  const getGridSize = (isSidebarCollapsed: boolean) => {
    return {
      xs: 12,
      sm: isSidebarCollapsed ? 6 : 12,
      md: isSidebarCollapsed ? 4 : 6,
      lg: 4,
    };
  };

  return (
    <>
      <CreateRoomModal open={isCreateRoomModalOpened} onClose={closeCreateRoomModal} />
      {isLoggedin && !isError && (
        <Container maxWidth={false} sx={{ pt: 2 }}>
          <Box paddingBottom={4}>
            <Stack direction="row" justifyContent="space-between">
              <Box>
                <Typography variant="h4" component="span">{`Today's Options`}</Typography>
                {!isLoading && isFetching && (
                  <>
                    <Typography mr={1} component="span">
                      ...fetching
                    </Typography>
                    <CircularProgress size={15} />
                  </>
                )}
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

          {!isLoading && (
            <Box>
              <Grid container spacing={4}>
                {!!rooms &&
                  rooms.map((item, index) => {
                    return (
                      <Grid key={index} item {...getGridSize(isSidebarCollapsed)}>
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
