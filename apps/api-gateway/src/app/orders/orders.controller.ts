import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateOrderDto, OrderResponseDto } from './orders.dto';
import { OrdersService } from './orders.service';

@ApiTags('Orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @ApiOperation({ summary: 'Criar novo pedido de restaurante' })
  @ApiBody({ type: CreateOrderDto })
  @ApiResponse({
    status: 201,
    description: 'Pedido enviado para processamento',
    type: OrderResponseDto,
  })
  @ApiResponse({ status: 400, description: 'Dados inválidos' })
  async createOrder(@Body() order: CreateOrderDto): Promise<OrderResponseDto> {
    return await this.ordersService.createOrder(order);
  }
}
