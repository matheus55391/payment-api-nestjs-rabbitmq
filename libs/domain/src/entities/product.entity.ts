export class Product {
    id: string;
    name: string;
    description?: string;
    price: number;
    category: string;
    imageUrl?: string;
    isAvailable: boolean;
    restaurantId: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(data: Partial<Product> = {}) {
        this.id = data.id || '';
        this.name = data.name || '';
        this.description = data.description;
        this.price = data.price || 0;
        this.category = data.category || '';
        this.imageUrl = data.imageUrl;
        this.isAvailable = data.isAvailable ?? true;
        this.restaurantId = data.restaurantId || '';
        this.createdAt = data.createdAt || new Date();
        this.updatedAt = data.updatedAt || new Date();
    }
}
