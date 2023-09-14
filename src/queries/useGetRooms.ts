import { IRoom } from '@/app/_interfaces';
import { getRooms } from './query-fn';
import { getIsLoggedin } from '@/utils/getIsLoggedin';
import { useQuery } from '@tanstack/react-query';

export const useGetRooms = () => {
  const { data, isLoading, isFetching, isError } = useQuery<IRoom[]>({
    queryKey: ['get-rooms'],
    queryFn: getRooms,
    // TODO: include later
    // suspense: true,
    retry: 3,
    staleTime: 1000 * 5,
    enabled: getIsLoggedin(),
  });
  return {
    rooms: data,
    isLoading,
    isFetching,
    isError,
  };
};
