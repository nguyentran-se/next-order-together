import { AvatarGroup, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { IRoom, IRoomCardInfo } from '../_interfaces';
import { getRoomInfoFromRoomData } from './room-utils';
import TimerIcon from '@mui/icons-material/Timer';
import Avatar from '../_common/Avatar.component';

function RoomCard({ table }: { table: IRoom }) {
  const [roomInfo, setRoomInfo] = useState<IRoomCardInfo>({
    hostName: '',
    dueTime: '',
    roomName: '',
    photoHref: '',
  });

  useEffect(() => {
    if (table) {
      setRoomInfo(getRoomInfoFromRoomData(table));
    }
  }, [table]);

  return (
    <Card
      elevation={5}
      sx={{
        height: 340,
        width: 390,
      }}
    >
      <CardMedia component="img" alt="green iguana" height="260" image={roomInfo.photoHref} />
      <CardContent sx={{ padding: '10px 5px' }}>
        <Typography className="nowrap-text" gutterBottom fontSize={'18px'} fontWeight="500" component="div">
          {roomInfo.roomName}
        </Typography>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2">
            <Typography color="text.secondary" component="span">
              <TimerIcon />
            </Typography>{' '}
            {/* Close at {roomInfo.dueTime} */}
            Close at 11 p.m
          </Typography>
          <AvatarGroup
            spacing="medium"
            max={3}
            sx={{
              '& .MuiAvatar-root': { width: 24, height: 24, fontSize: 15 },
            }}
          >
            {/* Dummy partipants */}
            <Avatar name="Bao"></Avatar>
            <Avatar name="Nguyen"></Avatar>
            <Avatar name="Yen"></Avatar>
            <Avatar name="Hue"></Avatar>
          </AvatarGroup>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default RoomCard;
