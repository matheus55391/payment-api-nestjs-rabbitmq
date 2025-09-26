import { IsString, IsOptional, IsEnum, IsNumber, IsPositive } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

// Payment DTOs baseados na domain
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

export class CreatePaymentDto {
    @ApiProperty({ example: 'ORD-20250925-001' })
    @IsString()
    orderId!: string;

    @ApiProperty({ example: 42.90 })
    @IsNumber()
    @IsPositive()
    amount!: number;

    @ApiProperty({ example: 'pix', enum: PaymentMethod })
    @IsEnum(PaymentMethod)
    method!: PaymentMethod;

    @ApiProperty({ example: 'PIX12345678', required: false })
    @IsOptional()
    @IsString()
    transactionId?: string;
}

export class PaymentResponseDto {
    @ApiProperty({ example: 'PAY-001' })
    id!: string;

    @ApiProperty({ example: 'ORD-20250925-001' })
    orderId!: string;

    @ApiProperty({ example: 42.90 })
    amount!: number;

    @ApiProperty({ example: 'pix', enum: PaymentMethod })
    method!: PaymentMethod;

    @ApiProperty({ example: 'pending', enum: PaymentStatus })
    status!: PaymentStatus;

    @ApiProperty({ example: '2025-09-25T14:30:00Z' })
    createdAt!: Date;
}
