export class Restaurant {
    id: string;
    name: string;
    description?: string;
    address: string;
    phone: string;
    email?: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;

    constructor(data: Partial<Restaurant> = {}) {
        this.id = data.id || '';
        this.name = data.name || '';
        this.description = data.description;
        this.address = data.address || '';
        this.phone = data.phone || '';
        this.email = data.email;
        this.isActive = data.isActive ?? true;
        this.createdAt = data.createdAt || new Date();
        this.updatedAt = data.updatedAt || new Date();
    }
}
