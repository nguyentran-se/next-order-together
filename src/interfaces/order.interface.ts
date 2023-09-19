import { IDish, IRoom } from '.';

interface OrderRoom extends Omit<IRoom, 'scrapingData' | 'createdAt'> {
  discount: string;
  scrapingData: {
    name: string;
  }
}

export interface OrderDish extends IDish {
  quantity: number;
}

interface OrderDetail {
  dishes: OrderDish[];
  id: string;
  price: number;
  status: string;
}

export interface Order {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  roomId: string;
  userId: string;
  room: OrderRoom;
  detail: OrderDetail;
}
