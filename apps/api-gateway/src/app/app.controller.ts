import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { AppService } from './app.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderResponseDto, OrderResponseSwaggerDto } from './dto/order-response.dto';

@ApiTags('API Gateway')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @ApiOperation({ summary: 'Obter dados do gateway' })
  @ApiResponse({ status: 200, description: 'Dados retornados com sucesso' })
  getData() {
    return this.appService.getData();
  }

  @Post('order')
  @ApiOperation({ summary: 'Criar novo pedido' })
  @ApiBody({ type: CreateOrderDto })
  @ApiResponse({
    status: 201,
    description: 'Pedido criado com sucesso',
    type: OrderResponseSwaggerDto
  })
  @ApiResponse({ status: 400, description: 'Dados inválidos' })
  createOrder(@Body() createOrderDto: CreateOrderDto): Promise<OrderResponseDto> {
    return this.appService.createOrder(createOrderDto);
  }
}
