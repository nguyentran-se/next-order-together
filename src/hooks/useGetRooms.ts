import { getRooms, postSignIn } from '@/apis/queries';
import { ITable } from '@/app/_interfaces';
import { useQuery } from '@tanstack/react-query';

export const useGetRooms = () => {
  return useQuery<ITable[]>({
    queryKey: ['get-rooms'],
    queryFn: getRooms,
    // TODO: include later
    // suspense: true,
    retry: 3,
    staleTime: 1000*5,
  });
};
