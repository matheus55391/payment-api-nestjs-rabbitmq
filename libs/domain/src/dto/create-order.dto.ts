import { OrderType } from '../entities/order.entity';

export interface IOrderItemDto {
  itemId: string;
  name: string;
  quantity: number;
  price: number;
  notes?: string;
}

export interface ICreateOrderDto {
  customerName: string;
  customerPhone: string;
  orderType: OrderType;
  deliveryAddress?: string;
  items: IOrderItemDto[];
  restaurantId: string;
  notes?: string;
}
