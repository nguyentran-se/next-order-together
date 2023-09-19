'use client';

import { useGetRoom } from '@/queries/room/useGetRoom';
import { Box, CircularProgress, Container, Stack, Typography } from '@mui/material';
import _ from 'lodash';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { getRoomInfoFromRoomData, getRoomMenuFromRoomData } from '../room-utils';
import HostInfo from './HostInfo';
import Menu from './Menu';
import RoomInfo from './RoomInfo';
import Spacer from '@/components/common/Spacer';

function Room() {
  const params = useParams();
  const id = _.isArray(params.id) ? params.id[0] : params.id;
  const { data, isFetching, isLoading, isError } = useGetRoom(id);

  return (
    <>
      {!isError && (
        <Container maxWidth={false}>
          {isLoading && (
            <Box textAlign="center">
              <CircularProgress />
            </Box>
          )}
          {!isLoading && isFetching && <>Fetching ...</>}
          {!isLoading &&
            (!_.isEmpty(data) ? (
              <Stack direction="column">
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={{xs: 3, md: 'auto'}} justifyContent="space-between">
                    <RoomInfo roomInfo={data}></RoomInfo>
                    <HostInfo hostInfo={data.host}></HostInfo>
                </Stack>
                <Spacer size={2}></Spacer>
                <Box>
                  <Menu
                    menu={getRoomMenuFromRoomData(data)}
                    roomInfo={{
                      roomId: data.id,
                      hostId: data.host.id,
                      roomName: getRoomInfoFromRoomData(data).roomName,
                      hostName: data.alias || data.host.fullName,
                    }}
                  ></Menu>
                </Box>
              </Stack>
            ) : (
              <Typography>Failed to get room info</Typography>
            ))}
        </Container>
      )}
      {isError && <Typography>Failed to get room info</Typography>}
    </>
  );
}

export default Room;
