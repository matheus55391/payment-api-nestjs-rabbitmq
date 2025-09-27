import { ApiProperty } from '@nestjs/swagger';
import type {
  ICreateOrderDto,
  IOrderItemDto,
} from '@libs/domain/dto/create-order.dto';
import { OrderType } from '@payment-api-nestjs-rabbitmq/domain';
import {
  IsString,
  IsNumber,
  IsOptional,
  IsArray,
  ValidateNested,
  IsEnum,
  IsNotEmpty,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';
export type { ICreateOrderDto } from '@libs/domain/dto/create-order.dto';

export class OrderItemDto implements IOrderItemDto {
  @IsString()
  @IsNotEmpty()
  itemId!: string;

  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsNumber()
  @Min(1)
  quantity!: number;

  @IsNumber()
  @Min(0)
  price!: number;

  @IsOptional()
  @IsString()
  notes?: string;
}

export class CreateOrderDto implements ICreateOrderDto {
  @IsString()
  @IsNotEmpty()
  customerName!: string;

  @IsString()
  @IsNotEmpty()
  customerPhone!: string;

  @IsEnum(OrderType)
  orderType!: OrderType;

  @IsOptional()
  @IsString()
  deliveryAddress?: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  items!: OrderItemDto[];

  @IsString()
  @IsNotEmpty()
  restaurantId!: string;

  @IsOptional()
  @IsString()
  notes?: string;
}

export class OrderResponseDto {
  @ApiProperty({ example: 'Pedido criado com sucesso' })
  message!: string;

  @ApiProperty()
  order!: CreateOrderDto;
}
