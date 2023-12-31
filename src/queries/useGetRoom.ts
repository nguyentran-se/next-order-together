import { getRoom } from './query-fn';
import { IRoom } from '@/app/_interfaces';
import { getIsLoggedin } from '@/utils/getIsLoggedin';
import { useQuery } from '@tanstack/react-query';

export const useGetRoom = (id: string) => {
  return useQuery<IRoom>({
    queryKey: [`get-room-${id}`],
    queryFn: () => getRoom(id),
    retry: 3,
    enabled: getIsLoggedin(),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};
