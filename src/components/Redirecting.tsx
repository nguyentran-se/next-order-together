'use client';

import { PAGE_PATH } from '@/constants';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import { postSignIn } from '@/apis/queries';
import LoadingScreen from '@/app/_common/LoadingScreen';
import { useToast } from '@/hooks/useToast'; 

function Redirecting({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const toast = useToast();
  const code = searchParams.get('code');

  const isLoggingin = pathname === PAGE_PATH.HOME && !!code;

  useEffect(() => {
    if (code) {
      // TODO: replace this with useUser hook later
      postSignIn(code)
        .catch((err) => {
          toast('error', 'Failed to sign in')
          console.log('err :>> ', err);
        })
        .finally(() => {
          const prevPath = localStorage.getItem('prevPath') || '/';
          router.push(prevPath);
        });
    }
  }, [isLoggingin]);

  return <>{isLoggingin ? <LoadingScreen /> : <>{children}</>}</>;
}

export default Redirecting;
