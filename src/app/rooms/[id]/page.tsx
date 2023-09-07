'use client';

import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Container, Stack, Box } from '@mui/material';
import HostInfo from './HostInfo';
import RoomInfo from './RoomInfo';
import Menu from './Menu';
import { mockMenu } from './mock';

function Room() {
  const params = useParams();
  const id = params.id;
  useEffect(() => {}, []);

  return (
    <Container
      maxWidth="xl"
      sx={{
        pt: 2,
      }}
    >
      <Stack direction="column">
        {/*  */}
        <Stack direction="row" justifyContent="space-between">
          <Stack>
            <RoomInfo roomInfo="test"></RoomInfo>
          </Stack>
          <Stack>
            <HostInfo hostInfo="test"></HostInfo>
          </Stack>
        </Stack>
        <Box>
          <Menu menu={mockMenu}></Menu>
        </Box>
      </Stack>
    </Container>
  );
}

export default Room;
