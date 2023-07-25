import { Body, Controller, Post, Get } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrdersDto } from './dto/create-orders';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}
  @Post()
  create(@Body() dto: CreateOrdersDto) {
    const param = dto;
    param.DataProducts = new Date();
    const result = this.ordersService.createOrders(param);
    return result;
  }
  @Get()
  getAll() {
    return this.ordersService.getAllOrders();
  }
}
