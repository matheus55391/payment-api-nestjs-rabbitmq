import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('API Gateway')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Health check do gateway' })
  @ApiResponse({ status: 200, description: 'Gateway funcionando corretamente' })
  getData() {
    return this.appService.getData();
  }
}
