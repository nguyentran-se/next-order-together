import { getTest } from '@/apis/queries';
import { useQuery } from '@tanstack/react-query';

export const useGet = () => {
  return useQuery<any>({
    queryKey: ['stream-hydrate-get-test'],
    queryFn: () => getTest(),
    suspense: true,
  });
};
