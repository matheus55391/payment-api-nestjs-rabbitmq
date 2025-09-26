export class OrderItem {
    id: string;
    itemId: string;
    name: string;
    quantity: number;
    price: number;
    notes?: string;
    orderId: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(data: Partial<OrderItem> = {}) {
        this.id = data.id || '';
        this.itemId = data.itemId || '';
        this.name = data.name || '';
        this.quantity = data.quantity || 1;
        this.price = data.price || 0;
        this.notes = data.notes;
        this.orderId = data.orderId || '';
        this.createdAt = data.createdAt || new Date();
        this.updatedAt = data.updatedAt || new Date();
    }

    getSubtotal(): number {
        return this.price * this.quantity;
    }
}
