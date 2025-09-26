import { ApiProperty } from '@nestjs/swagger';
import { OrderDto } from './order.dto';

export class OrderResponseDto {
    @ApiProperty({ example: 'Order sent to processing queue' })
    message!: string;

    @ApiProperty({ type: OrderDto })
    order!: OrderDto;
}
