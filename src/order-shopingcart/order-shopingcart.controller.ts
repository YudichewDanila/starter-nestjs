import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { OrderShopingcartService } from 'src/order-shopingcart/order-shopingcart.service';
import { CreateOrderShopingDto } from './dto/create-order-shopingcart';

@Controller('order-shopingcart')
export class OrderShopingcartController {
  constructor(private orderShopingProductService: OrderShopingcartService) {}

  @Get(':id')
  get(@Param() idShopingCart: any) {
    const OrderShopingCart =
      this.orderShopingProductService.getOrderShopingCart(idShopingCart.id);
    return OrderShopingCart;
  }
  @Delete(':id')
  async delete(@Param('id') idd: string) {
    const id = Number(idd.split('_')[0]);
    const id2 = Number(idd.split('_')[1]);
    await this.orderShopingProductService.deleteOrderShopingCart(id);
    const OrderShopingCart =
      this.orderShopingProductService.getOrderShopingCart(id2);
    return OrderShopingCart;
  }
  @Post()
  async create(@Body() dto: CreateOrderShopingDto) {
    const test = await this.orderShopingProductService.getOrderOneShopingCart(
      Number(dto.IdProducts),
      Number(dto.IdShopingCart),
    );
    if (test == null || Number(dto.IdProducts) != test.IdProducts.id) {
      return this.orderShopingProductService.createOrderShopingCart(dto);
    } else if (Number(dto.IdProducts) == test.IdProducts.id) {
      return;
    }
  }
}
