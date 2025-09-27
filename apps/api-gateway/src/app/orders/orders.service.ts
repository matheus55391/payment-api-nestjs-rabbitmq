import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { MICROSERVICES } from '@libs/domain/constants/microservices.constants';
import { QUEUE_PATTERNS } from '@libs/domain/constants/queue.constants';
import { CreateOrderDto, OrderResponseDto } from './orders.dto';

@Injectable()
export class OrdersService {
  constructor(
    @Inject(MICROSERVICES.ORDER_SERVICE.name)
    private readonly orderClient: ClientProxy
  ) {}

  async createOrder(orderData: CreateOrderDto): Promise<OrderResponseDto> {
    this.orderClient.emit(QUEUE_PATTERNS.ORDER_CREATED, orderData);

    return {
      message: 'Pedido recebido e enviado para processamento',
      order: orderData,
    };
  }
}
