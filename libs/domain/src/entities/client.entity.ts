export class Client {
    id: string;
    name: string;
    email: string;
    phone: string;
    address?: string;
    birthDate?: Date;
    isActive: boolean;
    preferences?: Record<string, unknown>;
    createdAt: Date;
    updatedAt: Date;

    constructor(data: Partial<Client> = {}) {
        this.id = data.id || '';
        this.name = data.name || '';
        this.email = data.email || '';
        this.phone = data.phone || '';
        this.address = data.address;
        this.birthDate = data.birthDate;
        this.isActive = data.isActive ?? true;
        this.preferences = data.preferences;
        this.createdAt = data.createdAt || new Date();
        this.updatedAt = data.updatedAt || new Date();
    }

    getAge(): number | undefined {
        if (!this.birthDate) return undefined;
        const today = new Date();
        const birth = new Date(this.birthDate);
        let age = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
            age--;
        }
        return age;
    }
}
