import { Body, Controller, Post } from '@nestjs/common';
import { OrderProductService } from './order-product.service';
import { CreateOrderProductDto } from './dto/create-order-product';
import { OrdersService } from 'src/orders/orders.service';
import { ProductsService } from 'src/products/products.service';

@Controller('order-product')
export class OrderProductController {
  constructor(
    private orderProductService: OrderProductService,
    private orderService: OrdersService,
    private productService: ProductsService,
  ) {}
  @Post()
  async create(@Body() dto: CreateOrderProductDto) {
    const param = {
      IdShopingCart: dto.IdShopingCart,
      IdPointOrders: dto.IdPointOrders,
      DataProducts: new Date(),
      StatusOrder: dto.StatusOrder,
      FullPrice: dto.FullPrice,
    };

    const result = await this.orderService.createOrders(param);
    for (let i = 0; i < dto.shopingCart.length; i++) {
      const shopingCart = {
        IdOrders: result.id,
        IdProducts: dto.shopingCart[i].IdProducts,
        CountProduct: dto.shopingCart[i].CountProduct,
      };
      this.orderProductService.createManyfacturer(shopingCart);
      this.productService.updateCountProduct(
        shopingCart.IdProducts,
        shopingCart.IdProducts.CountProducts - shopingCart.CountProduct,
      );
    }
    const pay = await this.orderProductService.createpay(
      result.id,
      dto.FullPrice,
      dto.IdShopingCart,
    );
    return pay;
    //return this.orderProductService.createManyfacturer(dto);
  }
}
