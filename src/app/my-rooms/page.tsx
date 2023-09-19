'use client';

import { useGetMyRooms } from '@/queries/useMyGetRooms';
import { LoggedInStatus, getIsLoggedin, useGetLoggedInStatus } from '@/utils/getIsLoggedin';
import { Box, CircularProgress, LinearProgress, Typography } from '@mui/material';
import _ from 'lodash';
import MyRoomItem from './MyRoomAccordion';

function MyRooms() {
  const { rooms, isError, isLoading, isFetching } = useGetMyRooms();
  const { status } = useGetLoggedInStatus();

  return (
    <>
      {status === LoggedInStatus.PENDING && (
        <Box textAlign="center">
          <CircularProgress />
        </Box>
      )}
      {status === LoggedInStatus.AUTHORIZED && !isError && (
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
      {status === LoggedInStatus.AUTHORIZED && isError && <Typography>Failed to get rooms</Typography>}
      {status === LoggedInStatus.UNAUTHORIZED && <Typography>Please log in to proceed</Typography>}
    </>
  );
}

export default MyRooms;
