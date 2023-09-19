'use client';

import { useGetMyRooms } from '@/queries/room/useGetMyRooms';
import { Box, CircularProgress, LinearProgress, Typography } from '@mui/material';
import _ from 'lodash';
import MyRoomItem from './MyRoomAccordion';

function MyRooms() {
  const { rooms, isError, isLoading, isFetching } = useGetMyRooms();

  return (
    <>
      {!isError && (
        <>
          {isLoading && (
            <Box textAlign="center">
              <CircularProgress />
            </Box>
          )}
          {!isLoading && isFetching && <LinearProgress />}
          {!isLoading && (
            <>
              {!_.isEmpty(rooms) && rooms?.map((room, index) => <MyRoomItem key={`my_rooms_accordion_${room.id}`} room={room} />)}
              {_.isEmpty(rooms) && <>No orders</>}
            </>
          )}
        </>
      )}
      {isError && <Typography>Failed to get rooms</Typography>}
    </>
  );
}

export default MyRooms;
