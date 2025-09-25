import { ApiProperty } from '@nestjs/swagger';

export interface OrderResponseDto {
    id: string;
    customerId: string;
    productId: string;
    quantity: number;
    amount: number;
    currency: string;
    description?: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
}

export class OrderResponseSwaggerDto implements OrderResponseDto {
    @ApiProperty({
        description: 'ID único do pedido',
        example: 'order-789'
    })
    id!: string;

    @ApiProperty({
        description: 'ID do cliente',
        example: 'customer-123'
    })
    customerId!: string;

    @ApiProperty({
        description: 'ID do produto',
        example: 'product-456'
    })
    productId!: string;

    @ApiProperty({
        description: 'Quantidade do produto',
        example: 2
    })
    quantity!: number;

    @ApiProperty({
        description: 'Valor total do pedido',
        example: 99.90
    })
    amount!: number;

    @ApiProperty({
        description: 'Moeda do pagamento',
        example: 'BRL'
    })
    currency!: string;

    @ApiProperty({
        description: 'Descrição do pedido',
        example: 'Pedido de teste',
        required: false
    })
    description?: string;

    @ApiProperty({
        description: 'Status do pedido',
        example: 'PENDING',
        enum: ['PENDING', 'PROCESSING', 'COMPLETED', 'FAILED']
    })
    status!: string;

    @ApiProperty({
        description: 'Data de criação do pedido',
        example: '2025-09-25T10:30:00Z'
    })
    createdAt!: Date;

    @ApiProperty({
        description: 'Data de última atualização do pedido',
        example: '2025-09-25T10:30:00Z'
    })
    updatedAt!: Date;
}
