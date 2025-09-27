import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { MICROSERVICES } from '@libs/domain/constants/microservices.constants';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://admin:admin@localhost:5672'],
        queue: MICROSERVICES.ORDER_SERVICE.queue,
        queueOptions: { durable: true },
      },
    }
  );

  await app.listen();
  Logger.log(`🚀 Application is listening on RabbitMQ...`);
}

bootstrap();
