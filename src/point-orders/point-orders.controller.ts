import { Body, Controller, Post, Get } from '@nestjs/common';
import { PointOrdersService } from './point-orders.service';
import { CreatePointOrdersDto } from './dto/create-point-orders';

@Controller('point-orders')
export class PointOrdersController {
  constructor(private PointOrdersServiceService: PointOrdersService) {}
  @Post()
  create(@Body() dto: CreatePointOrdersDto) {
    return this.PointOrdersServiceService.createPointOrders(dto);
  }
  @Get()
  getAll() {
    return this.PointOrdersServiceService.getAllPointOrders();
  }
}
