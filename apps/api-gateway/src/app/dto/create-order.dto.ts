import {
  IsString,
  IsArray,
  IsNumber,
  IsOptional,
  IsPositive,
  MinLength,
  ValidateNested,
  IsEnum,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { OrderType } from '@libs/domain/entities/order.entity';

export class OrderItemDto {
  @ApiProperty({ example: 'pizza-margherita' })
  @IsString()
  @MinLength(1)
  itemId!: string;

  @ApiProperty({ example: 'Pizza Margherita' })
  @IsString()
  @MinLength(1)
  name!: string;

  @ApiProperty({ example: 2 })
  @IsNumber()
  @IsPositive()
  quantity!: number;

  @ApiProperty({ example: 25.9 })
  @IsNumber()
  @IsPositive()
  price!: number;

  @ApiProperty({ example: 'Sem cebola, massa fina', required: false })
  @IsOptional()
  @IsString()
  notes?: string;
}

export class CreateOrderDto {
  @ApiProperty({ example: 'João Silva' })
  @IsString()
  @MinLength(1)
  customerName!: string;

  @ApiProperty({ example: '11999887766' })
  @IsString()
  @MinLength(10)
  customerPhone!: string;

  @ApiProperty({ example: 'delivery', enum: OrderType })
  @IsEnum(OrderType)
  orderType!: OrderType;

  @ApiProperty({
    example: 'Rua das Flores, 123 - Apto 45',
    required: false,
    description: 'Obrigatório para delivery',
  })
  @IsOptional()
  @IsString()
  deliveryAddress?: string;

  @ApiProperty({
    type: [OrderItemDto],
    example: [
      {
        itemId: 'pizza-margherita',
        name: 'Pizza Margherita',
        quantity: 1,
        price: 25.9,
        notes: 'Sem cebola',
      },
      {
        itemId: 'coca-cola-2l',
        name: 'Coca-Cola 2L',
        quantity: 2,
        price: 8.5,
      },
    ],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  items!: OrderItemDto[];

  @ApiProperty({ example: 'Entregar no portão principal', required: false })
  @IsOptional()
  @IsString()
  notes?: string;
}
