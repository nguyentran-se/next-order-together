import { IDish, RoomInfo } from '../interfaces';
import { Order } from '../interfaces/order.interface';
import _ from 'lodash';
import { create } from 'zustand';

export interface DraftOrdersItem {
  dishId: string;
  dishInfo: IDish;
  roomInfo: RoomInfo;
  amount: number;
}

interface DraftOrders {
  [dishId: string]: DraftOrdersItem;
}

interface DraftOrdersStore {
  draftOrders: DraftOrders;
  getDraftOrdersAmount: () => number;
  getDraftDishesAmount: (dishId: string) => number;
  addDraftOrder: (order: Omit<DraftOrdersItem, 'amount'>) => void;
  removeDraftOrder: (orderId: string) => void;
  removeDraftOrders: (orderIds: string[]) => void;
}

export const useDraftOrdersStore = create<DraftOrdersStore>((set, get) => ({
  draftOrders: {},
  getDraftOrdersAmount: () => {
    const { draftOrders } = get();
    return Object.keys(draftOrders).length;
  },
  getDraftDishesAmount: (dishId: string) => {
    const { draftOrders } = get();
    return draftOrders[dishId]?.amount || 0;
  },
  addDraftOrder: (order: Omit<DraftOrdersItem, 'amount'>) =>
    set(({ draftOrders }) => {
      // If draft order doesn't exist, add it to list
      if (!draftOrders[order.dishId]) {
        return {
          draftOrders: {
            ...draftOrders,
            [order.dishId]: { ...order, amount: 1 },
          },
        };
      } else {
        const existedDraftOrder = draftOrders[order.dishId];
        return {
          draftOrders: {
            ...draftOrders,
            [order.dishId]: {
              ...existedDraftOrder,
              amount: existedDraftOrder.amount + 1,
            },
          },
        };
      }
    }),
  removeDraftOrder: (orderId: string) => {
    const { draftOrders } = get();
    const existedDraftOrder = draftOrders[orderId];
    if (existedDraftOrder) {
      set(({ draftOrders }) => {
        const amount = existedDraftOrder.amount;
        if (amount <= 1) {
          const resultOrders = _.omit(draftOrders, orderId);
          return {
            draftOrders: resultOrders,
          };
        } else {
          return {
            draftOrders: {
              ...draftOrders,
              [orderId]: {
                ...existedDraftOrder,
                amount: existedDraftOrder.amount - 1,
              },
            },
          };
        }
      });
    }
  },
  removeDraftOrders: (orderIds: string[]) => {
    set(({ draftOrders }) => {
      const resultOrders = _.omit(draftOrders, orderIds);
      return {
        draftOrders: resultOrders,
      };
    });
  },
}));
