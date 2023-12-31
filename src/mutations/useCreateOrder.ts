import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { IPostCreateOrderRequest, postCreateOrder } from './mutation-fn';
import { queryClient } from '@/utils/provider';
import { useDraftOrdersStore } from '@/hooks/useDraftOrdersStore';

export const useCreateOrder = (onSuccessFn?: Function, onErrorFn?: Function) => {
  const { removeDraftOrders } = useDraftOrdersStore();
  const { mutate, isLoading } = useMutation<string, unknown, IPostCreateOrderRequest, unknown>({
    mutationFn: postCreateOrder,
    onSuccess: (data, request) => {
      queryClient.invalidateQueries(['get-orders-me']);
      toast.success(`Create order successfully`);
      removeDraftOrders(request.dishes.map(dish => dish.id))
      if (onSuccessFn) onSuccessFn();
    },
    onError: (error: any) => {
      toast.error(`Can't create order`);
      toast.error(error.toString());
      if (onErrorFn) onErrorFn();
    },
  });

  return {
    createOrder: mutate,
    isCreatingOrder: isLoading,
  };
};
