import { OrderItem } from "src/entities/order-item.entity.js";

export enum OrderStatus {
    PENDING = 'pending',
    CONFIRMED = 'confirmed',
    PREPARING = 'preparing',
    READY = 'ready',
    OUT_FOR_DELIVERY = 'out_for_delivery',
    DELIVERED = 'delivered',
    CANCELLED = 'cancelled'
}

export enum OrderType {
    DELIVERY = 'delivery',
    PICKUP = 'pickup',
    DINE_IN = 'dine_in'
}

export class Order {
    id: string;
    customerName: string;
    customerPhone: string;
    orderType: OrderType;
    status: OrderStatus;
    deliveryAddress?: string;
    items: OrderItem[];
    totalAmount: number;
    notes?: string;
    restaurantId: string;
    clientId?: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(data: Partial<Order> = {}) {
        this.id = data.id || '';
        this.customerName = data.customerName || '';
        this.customerPhone = data.customerPhone || '';
        this.orderType = data.orderType || OrderType.DELIVERY;
        this.status = data.status || OrderStatus.PENDING;
        this.deliveryAddress = data.deliveryAddress;
        this.items = data.items || [];
        this.totalAmount = data.totalAmount || 0;
        this.notes = data.notes;
        this.restaurantId = data.restaurantId || '';
        this.clientId = data.clientId;
        this.createdAt = data.createdAt || new Date();
        this.updatedAt = data.updatedAt || new Date();
    }

    calculateTotal(): number {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
}
