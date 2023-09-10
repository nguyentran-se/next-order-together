import { useCallback } from 'react';
import { ToastOptions, toast } from 'react-toastify';
type ToastType = 'loading' | 'success' | 'info' | 'error' | 'warning' | 'warn';

export const useToast = (options?: ToastOptions) => {
  const fn = (type: ToastType, message: string) => {
    const handler: { [type in ToastType]: Function } = {
      error: () => {
        toast.error(message, options);
      },
      warning: () => {
        toast.warn(message, options);
      },
      loading: () => {
        toast.loading(message, options);
      },
      success: () => {
        toast.success(message, options);
      },
      info: () => {
        toast.info(message, options);
      },
      warn: () => {
        toast.warn(message, options);
      },
    };
    return useCallback(handler[type](), [message, options]);
  };

  return fn;
};
