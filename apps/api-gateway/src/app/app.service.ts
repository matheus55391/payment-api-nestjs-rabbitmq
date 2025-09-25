import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderResponseDto } from './dto/order-response.dto';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  async createOrder(createOrderDto: CreateOrderDto): Promise<OrderResponseDto> {
    // Aqui você implementaria a lógica de criação do pedido
    // Por exemplo, enviar para uma fila RabbitMQ ou chamar outro serviço

    const orderId = `order_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    const orderResponse: OrderResponseDto = {
      id: orderId,
      customerId: createOrderDto.customerId,
      productId: createOrderDto.productId,
      quantity: createOrderDto.quantity,
      amount: createOrderDto.amount,
      currency: createOrderDto.currency,
      description: createOrderDto.description,
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    return orderResponse;
  }
}
