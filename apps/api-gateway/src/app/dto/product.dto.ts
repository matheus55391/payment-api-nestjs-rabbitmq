import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, MinLength } from 'class-validator';

// Product DTOs baseados na domain
export class CreateProductDto {
    @ApiProperty({ example: 'Pizza Margherita' })
    @IsString()
    @MinLength(1)
    name!: string;

    @ApiProperty({ example: 'Pizza com molho de tomate, mussarela e manjericão', required: false })
    @IsOptional()
    @IsString()
    description?: string;

    @ApiProperty({ example: 25.90 })
    @IsNumber()
    price!: number;

    @ApiProperty({ example: 'Pizza' })
    @IsString()
    category!: string;

    @ApiProperty({ example: 'https://example.com/pizza.jpg', required: false })
    @IsOptional()
    @IsString()
    imageUrl?: string;

    @ApiProperty({ example: 'REST-001' })
    @IsString()
    restaurantId!: string;
}

export class ProductResponseDto {
    @ApiProperty({ example: 'PROD-001' })
    id!: string;

    @ApiProperty({ example: 'Pizza Margherita' })
    name!: string;

    @ApiProperty({ example: 'Pizza com molho de tomate, mussarela e manjericão' })
    description?: string;

    @ApiProperty({ example: 25.90 })
    price!: number;

    @ApiProperty({ example: 'Pizza' })
    category!: string;

    @ApiProperty({ example: 'https://example.com/pizza.jpg' })
    imageUrl?: string;

    @ApiProperty({ example: true })
    isAvailable!: boolean;

    @ApiProperty({ example: 'REST-001' })
    restaurantId!: string;

    @ApiProperty({ example: '2025-09-25T14:30:00Z' })
    createdAt!: Date;
}
