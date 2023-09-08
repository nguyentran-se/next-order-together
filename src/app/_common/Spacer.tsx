import { Box } from '@mui/material';

function Spacer({ size = 1 }: { size?: number }) {
  return <Box mb={size}></Box>;
}

export default Spacer;
