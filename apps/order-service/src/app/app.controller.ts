import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { QUEUE_PATTERNS } from '@libs/domain/constants/queue.constants';
import type { ICreateOrderDto } from '@libs/domain/dto/create-order.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @MessagePattern(QUEUE_PATTERNS.ORDER_CREATED)
  handleOrderCreated(@Payload() order: ICreateOrderDto) {
    Logger.log('[Order-Service]: Received new order:', order);
  }
}
