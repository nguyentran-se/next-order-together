'use client';

import Spacer from '@/app/_common/Spacer';
import { useGetRoom } from '@/hooks/useGetRoom';
import { Box, CircularProgress, Container, Stack, Typography } from '@mui/material';
import _ from 'lodash';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { getRoomMenuFromRoomData } from '../room-utils';
import HostInfo from './HostInfo';
import Menu from './Menu';
import RoomInfo from './RoomInfo';

function Room() {
  const params = useParams();
  const id = _.isArray(params.id) ? params.id[0] : params.id;
  const { data, isFetching, isLoading } = useGetRoom(id);

  useEffect(() => {
    console.log('data :>> ', data);
    console.log('isFetching :>> ', isFetching);
    console.log('isLoading :>> ', isLoading);
  }, [data, isFetching, isLoading]);

  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          pt: 2,
        }}
      >
        {isLoading && <Box textAlign='center'><CircularProgress /></Box>}
        {!isLoading && isFetching && <>Fetching ...</>}
        {!isLoading &&
          (!_.isEmpty(data) ? (
            <Stack direction="column">
              {/*  */}
              <Stack direction="row" justifyContent="space-between">
                <Stack>
                  <RoomInfo roomInfo={data}></RoomInfo>
                </Stack>
                <Stack>
                  <HostInfo hostInfo={data.host}></HostInfo>
                </Stack>
              </Stack>
              <Spacer size={2}></Spacer>
              <Box>
                <Menu menu={getRoomMenuFromRoomData(data)}></Menu>
              </Box>
            </Stack>
          ) : (
            <Typography>Failed to get room info</Typography>
          ))}
      </Container>
    </>
  );
}

export default Room;
