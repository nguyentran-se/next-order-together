import { Typography, Box, Stack } from '@mui/material';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import PlaceIcon from '@mui/icons-material/Place';
import SellIcon from '@mui/icons-material/Sell';

function RoomInfo({ roomInfo }: { roomInfo: any }) {
  return (
    <>
      <Stack direction="row">
        {/* Room name */}
        <Typography variant="h4" fontWeight="500" sx={{ mr: 1 }}>
          {'uan an, quan com '}
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
            {'Close order at 11 a.m'}
          </Typography>
        </Box>
      </Stack>

      {/* Description */}
      <Typography color="text.secondary">Quan an, quan com ne</Typography>

      {/* Address and price range */}
      <Typography component="div">
        <Typography>
          <PlaceIcon />
          Dia chi ne
        </Typography>
        <Typography>
          <SellIcon />
          Price range ne
        </Typography>
      </Typography>
    </>
  );
}

export default RoomInfo;
