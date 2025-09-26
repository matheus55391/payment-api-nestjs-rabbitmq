import { IsString, IsArray, IsNumber, IsOptional, IsEnum, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { OrderStatus, OrderType } from '@domain/entities/order.entity';
import { OrderItemDto } from './create-order.dto';

export class OrderDto {
    @ApiProperty({ example: 'ORD-20250925-001' })
    @IsString()
    orderId!: string;

    @ApiProperty({ example: 'João Silva' })
    @IsString()
    customerName!: string;

    @ApiProperty({ example: '11999887766' })
    @IsString()
    customerPhone!: string;

    @ApiProperty({ example: 'delivery', enum: OrderType })
    @IsEnum(OrderType)
    orderType!: OrderType;

    @ApiProperty({
        example: 'Rua das Flores, 123 - Apto 45',
        required: false
    })
    @IsOptional()
    @IsString()
    deliveryAddress?: string;

    @ApiProperty({ type: [OrderItemDto] })
    @IsArray()
    items!: OrderItemDto[];

    @ApiProperty({ example: 42.90 })
    @IsNumber()
    totalAmount!: number;

    @ApiProperty({ example: 'pending', enum: OrderStatus })
    @IsEnum(OrderStatus)
    status!: OrderStatus;

    @ApiProperty({ example: '2025-09-25T14:30:00Z' })
    @IsDateString()
    createdAt!: Date;

    @ApiProperty({ example: 'Entregar no portão principal', required: false })
    @IsOptional()
    @IsString()
    notes?: string;

    @ApiProperty({ example: 35, description: 'Tempo estimado em minutos' })
    @IsNumber()
    estimatedTime!: number;
}
