import { queryClient } from '@/providers/QueryClientProvider';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { IPostCreateRoomRequest, IPostCreateRoomResponse, postCreateRoom } from './actions';

export const useCreateRoom = (onSuccessFn?: Function, onErrorFn?: Function) => {
  return useMutation<IPostCreateRoomResponse, unknown, IPostCreateRoomRequest, unknown>({
    mutationFn: postCreateRoom,
    onSuccess: () => {
      queryClient.invalidateQueries(['get-rooms']);
      toast.success(`Create room successfully`);
      if (onSuccessFn) onSuccessFn();
    },
    onError: (error: any) => {
      toast.error(`Can't create room`);
      toast.error(error.toString());
      if (onErrorFn) onErrorFn();
    },
  });
};
