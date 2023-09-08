import { IHost } from '@/app/_interfaces/host.interface';
import { Avatar, Box, Typography, Divider, Stack } from '@mui/material';

function HostInfo({ hostInfo }: { hostInfo: IHost }) {
  return (
    <Box borderRadius={5} border='1px solid rgba(0, 0, 0, 0.12)' minWidth='300px' padding='8px 16px'>
      <Typography mb={1} fontWeight='500' variant='h6'>Host by</Typography>
      <Divider />
      <Stack direction="row" mt={1}>
        <Box mr={2}>
          <Avatar>T</Avatar>
        </Box>
        <Box>
          <Typography>{hostInfo.fullName}</Typography>
          <Typography>{`Techcombank (on working)`}</Typography>
        </Box>
      </Stack>
    </Box>
  );
}

export default HostInfo;
