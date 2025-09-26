import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MICROSERVICES } from '@domain/constants/microservices.constants';

@Module({
  imports: [ClientsModule.register([
    {
      name: MICROSERVICES.ORDER_SERVICE.name,
      transport: Transport.RMQ,
      options: {
        urls: [process.env.RABBITMQ_URL || 'amqp://admin:admin@localhost:5672/payment_vhost'],
        queue: MICROSERVICES.ORDER_SERVICE.queue,
        queueOptions: {
          durable: true
        },
      },
    }
  ])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
