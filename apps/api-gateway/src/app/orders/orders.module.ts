import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { MICROSERVICES } from '@libs/domain/constants/microservices.constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: MICROSERVICES.ORDER_SERVICE.name,
        transport: Transport.RMQ,
        options: {
          urls: [
            process.env.RABBITMQ_URL ||
              'amqp://admin:admin@localhost:5672/payment_vhost',
          ],
          queue: MICROSERVICES.ORDER_SERVICE.queue,
          queueOptions: {
            durable: true,
          },
        },
      },
    ]),
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
  exports: [OrdersService],
})
export class OrdersModule {}
