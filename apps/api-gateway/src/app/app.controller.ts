import { Controller, Get, Post, Body, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { AppService } from './app.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderResponseDto } from './dto/order-response.dto';
import { ClientProxy } from '@nestjs/microservices';
import { MICROSERVICES } from '@domain/constants/microservices.constants';
import { QUEUE_PATTERNS } from '@domain/constants/queue.constants';
import { OrderStatus } from '@domain/entities/order.entity';

@ApiTags('API Gateway')
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject(MICROSERVICES.ORDER_SERVICE.name) private readonly client: ClientProxy,
  ) { }

  @Get()
  @ApiOperation({ summary: 'Obter dados do gateway' })
  @ApiResponse({ status: 200, description: 'Dados retornados com sucesso' })
  getData() {
    return this.appService.getData();
  }

  @Post('order')
  @ApiOperation({ summary: 'Criar novo pedido de restaurante' })
  @ApiBody({ type: CreateOrderDto })
  @ApiResponse({
    status: 201,
    description: 'Pedido enviado para processamento',
    type: OrderResponseDto
  })
  @ApiResponse({ status: 400, description: 'Dados inválidos' })
  createOrder(@Body() createOrderDto: CreateOrderDto): OrderResponseDto {
    // Gerar ID único do pedido
    const orderId = `ORD-${new Date().toISOString().slice(0, 10).replace(/-/g, '')}-${String(Date.now()).slice(-6)}`;

    // Calcular total do pedido
    const totalAmount = createOrderDto.items.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);

    // Calcular tempo estimado baseado no tipo de pedido e quantidade de itens
    const baseTime = createOrderDto.orderType === 'delivery' ? 45 :
      createOrderDto.orderType === 'pickup' ? 25 : 15;
    const itemsTime = createOrderDto.items.length * 5;
    const estimatedTime = baseTime + itemsTime;

    // Criar objeto do pedido completo
    const order = {
      orderId,
      customerName: createOrderDto.customerName,
      customerPhone: createOrderDto.customerPhone,
      orderType: createOrderDto.orderType,
      deliveryAddress: createOrderDto.deliveryAddress,
      items: createOrderDto.items,
      totalAmount: Math.round(totalAmount * 100) / 100, // Arredondar para 2 casas decimais
      status: OrderStatus.PENDING,
      createdAt: new Date(),
      notes: createOrderDto.notes,
      estimatedTime
    };

    // Enviar para RabbitMQ
    this.client.emit(QUEUE_PATTERNS.ORDER_CREATED, order);

    return {
      message: `Pedido ${orderId} recebido! Tempo estimado: ${estimatedTime} minutos`,
      order
    };
  }
}
