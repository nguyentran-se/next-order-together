import { AvatarGroup, Card, CardContent, CardMedia, Stack, SxProps, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { IRoom, IRoomCardInfo } from '../_interfaces';
import { getRoomInfoFromRoomData } from './room-utils';
import TimerIcon from '@mui/icons-material/Timer';
import Avatar from '../_common/Avatar.component';

const HostNameStyles: SxProps = {
  color: '#0060a9',
  background: 'rgba(255, 255, 255, 0.85)',
  position: 'absolute',
  left: '0',
  top: '24px',
  padding: '8px 16px 8px 24px',
  borderRadius: '0 10px 10px 0',
  transform: '20px',
  zIndex: '20',
};

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
      // elevation={5}
      sx={{
        height: 340,
        width: 390,
        position: 'relative',
        boxShadow: '0px 8px 10px 3px rgba(0,0,0,0.1)',
      }}
    >
      <Typography sx={HostNameStyles}>{roomInfo.hostName}</Typography>
      <CardMedia component="img" alt="green iguana" height="260" image={roomInfo.photoHref} />
      <CardContent sx={{ padding: '10px 15px' }}>
        <Typography className="nowrap-text" gutterBottom fontSize={'18px'} fontWeight="500" component="div">
          {roomInfo.roomName}
        </Typography>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2" display="flex" alignItems="center">
            <Typography color="text.secondary" component="span" mr={1}>
              <TimerIcon />
            </Typography>{' '}
            {/* Close at {roomInfo.dueTime} */}
            {`Close at ${table.dueTime}`}
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
