'use client';

import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { getIsLoggedin } from '@/utils/getIsLoggedin';
import { getUser } from './action';

export const useGetProfile = (onSuccessCallback?: Function, onErrorCallback?: Function) => {
  const { data, isFetching, isSuccess, isError, refetch } = useQuery({
    queryKey: ['profile-me'],
    queryFn: getUser,
    enabled: getIsLoggedin(),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (data && isSuccess) {
      if (onSuccessCallback) onSuccessCallback();
    }
  }, [isSuccess, data, onSuccessCallback]);

  useEffect(() => {
    if (isError) {
      if (onErrorCallback) onErrorCallback();
    }
  }, [isError, onErrorCallback]);

  return {
    profile: data,
    loading: isFetching,
    reloadProfile: refetch,
  };
};
