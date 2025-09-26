export enum PaymentStatus {
    PENDING = 'pending',
    PROCESSING = 'processing',
    COMPLETED = 'completed',
    FAILED = 'failed',
    CANCELLED = 'cancelled',
    REFUNDED = 'refunded'
}

export enum PaymentMethod {
    CREDIT_CARD = 'credit_card',
    DEBIT_CARD = 'debit_card',
    PIX = 'pix',
    CASH = 'cash',
    BANK_TRANSFER = 'bank_transfer'
}

export class Payment {
    id: string;
    orderId: string;
    amount: number;
    method: PaymentMethod;
    status: PaymentStatus;
    transactionId?: string;
    externalPaymentId?: string;
    paymentData?: Record<string, unknown>;
    processedAt?: Date;
    createdAt: Date;
    updatedAt: Date;

    constructor(data: Partial<Payment> = {}) {
        this.id = data.id || '';
        this.orderId = data.orderId || '';
        this.amount = data.amount || 0;
        this.method = data.method || PaymentMethod.PIX;
        this.status = data.status || PaymentStatus.PENDING;
        this.transactionId = data.transactionId;
        this.externalPaymentId = data.externalPaymentId;
        this.paymentData = data.paymentData;
        this.processedAt = data.processedAt;
        this.createdAt = data.createdAt || new Date();
        this.updatedAt = data.updatedAt || new Date();
    }

    isCompleted(): boolean {
        return this.status === PaymentStatus.COMPLETED;
    }

    isPending(): boolean {
        return this.status === PaymentStatus.PENDING;
    }

    isFailed(): boolean {
        return this.status === PaymentStatus.FAILED;
    }
}
