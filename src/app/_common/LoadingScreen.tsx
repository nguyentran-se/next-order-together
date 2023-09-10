import { Box } from '@mui/material';
import Image from 'next/image';

const styles = {
  '@keyframes sparkle': {
    '0%, 100%': {
      opacity: 0.5,
    },
    '50%': {
      opacity: 1,
    },
  },

  animation: 'sparkle 1s ease-in-out infinite',
};

function LoadingScreen() {
  const __DEVMODE__ = process.env.NODE_ENV === 'development';
  const fixedSrc =
    'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3Fwc3NzYjY4cHVwajl2OHk3a3JqbndrZjI5ZzFpZ29yaHY3c2tuaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZBQhoZC0nqknSviPqT/giphy.gif';
  const loadingSrc = __DEVMODE__ ? fixedSrc : '/giphy.gif';
  return (
    <Box sx={styles}>
      <Image src={loadingSrc} fill alt="Loading" />
    </Box>
  );
}

export default LoadingScreen;
