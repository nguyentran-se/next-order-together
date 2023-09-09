'use client';

import { PAGE_PATH } from '@/constants';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import { postSignIn } from '@/apis/queries';
import { Box } from '@mui/material';

const styles = {
  '@keyframes sparkle': {
    '0%, 100%': {
      opacity: 0.5
    },
    '50%': {
      opacity: 1
    },
  },

  animation: 'sparkle 1s ease-in-out infinite',
};

function Redirecting({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const code = searchParams.get('code');

  const __DEVMODE__ = process.env.NODE_ENV === 'development';
  const fixedSrc =
    'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3Fwc3NzYjY4cHVwajl2OHk3a3JqbndrZjI5ZzFpZ29yaHY3c2tuaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZBQhoZC0nqknSviPqT/giphy.gif';
  const loadingSrc = __DEVMODE__ ? fixedSrc : '/giphy.gif';

  const isLoggingin = pathname === PAGE_PATH.HOME && !!code;

  useEffect(() => {
    if (code) {
      // TODO: replace this with useUser hook later
      postSignIn(code)
        .catch((err) => {
          console.log('err :>> ', err);
        })
        .finally(() => {
          const prevPath = localStorage.getItem('prevPath') || '/';
          router.push(prevPath);
        });
    }
  }, [isLoggingin]);

  return (
    <>
      {isLoggingin ? (
        <Box sx={styles}>
          <Image src={loadingSrc} fill alt="Loading" />
        </Box>
      ) : (
        <>{children}</>
      )}
    </>
  );
}

export default Redirecting;
