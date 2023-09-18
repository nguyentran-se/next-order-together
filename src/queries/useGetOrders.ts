import { useQuery } from '@tanstack/react-query';
import { getOrders } from './query-fn';
import { getIsLoggedin } from '@/utils/getIsLoggedin';

export const useGetOrders = () => {
  const { data, isLoading, isFetching, refetch, isError } = useQuery({
    queryKey: ['get-orders-me'],
    queryFn: getOrders,
    enabled: getIsLoggedin(),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  return {
    orders: data,
    isLoading,
    isFetching,
    isError: isError,
    reloadOrders: refetch,
  };
};
