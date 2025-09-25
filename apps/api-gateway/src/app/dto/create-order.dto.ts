import { IsString, IsNumber, IsOptional, IsPositive, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
    @ApiProperty({
        description: 'ID do cliente',
        example: 'customer-123',
        minLength: 1
    })
    @IsString()
    @MinLength(1)
    customerId!: string;

    @ApiProperty({
        description: 'ID do produto',
        example: 'product-456',
        minLength: 1
    })
    @IsString()
    @MinLength(1)
    productId!: string;

    @ApiProperty({
        description: 'Quantidade do produto',
        example: 2,
        minimum: 1
    })
    @IsNumber()
    @IsPositive()
    quantity!: number;

    @ApiProperty({
        description: 'Valor total do pedido',
        example: 99.90,
        minimum: 0.01
    })
    @IsNumber()
    @IsPositive()
    amount!: number;

    @ApiProperty({
        description: 'Moeda do pagamento',
        example: 'BRL',
        minLength: 3
    })
    @IsString()
    @MinLength(3)
    currency!: string;

    @ApiProperty({
        description: 'Descrição opcional do pedido',
        example: 'Pedido de teste',
        required: false
    })
    @IsOptional()
    @IsString()
    description?: string;
}
