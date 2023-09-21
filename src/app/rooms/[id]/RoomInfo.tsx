import { Typography, Box, Stack } from '@mui/material';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import PlaceIcon from '@mui/icons-material/Place';
import SellIcon from '@mui/icons-material/Sell';
import { IRoom } from '../../../interfaces';
import { getRoomDetailFromRoomData } from '../room-utils';

function RoomInfo({ roomInfo }: { roomInfo: IRoom }) {
  const roomDetail = getRoomDetailFromRoomData(roomInfo);
  return (
    <>
      <Stack direction="row">
        {/* Room name */}
        <Typography variant="h4" fontWeight="500" sx={{ mr: 1 }}>
          {roomDetail.name}
        </Typography>

        {/* Due datetime */}
        <Box
          sx={{
            backgroundColor: '#FF7C02',
            borderRadius: '5px',
          }}
        >
          <Typography display="flex" alignItems="center" color="common.white" padding="12px">
            <WatchLaterIcon sx={{ mr: 1 }} />
            {`Close order at ${roomInfo.dueTime}`}
          </Typography>
        </Box>
      </Stack>

      {/* Description */}
      <Typography color="text.secondary">{roomDetail.description}</Typography>

      {/* Address and price range */}
      <Typography component="div">
        <Typography>
          <PlaceIcon />
          {roomDetail.address.street || 'Somewhere in the world'}
        </Typography>
        <Typography>
          <SellIcon />
          {`Price range (on working)`}
        </Typography>
      </Typography>
    </>
  );
}

export default RoomInfo;
