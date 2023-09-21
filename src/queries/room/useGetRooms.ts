import { IRoom } from '../../interfaces';
import { getIsLoggedin } from '@/utils/getIsLoggedin';
import { useQuery } from '@tanstack/react-query';
import { getRooms } from './actions';

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
