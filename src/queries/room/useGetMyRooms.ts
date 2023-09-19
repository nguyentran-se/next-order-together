import { MyRoom } from '@/interfaces';
import { getIsLoggedin } from '@/utils/getIsLoggedin';
import { useQuery } from '@tanstack/react-query';
import { getMyRooms } from './actions';

export const useGetMyRooms = () => {
  const { data, isLoading, isFetching, isError } = useQuery<MyRoom[]>({
    queryKey: ['get-my-rooms'],
    queryFn: getMyRooms,
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