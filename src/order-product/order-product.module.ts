import { Module, forwardRef } from '@nestjs/common';
import { OrderProductService } from './order-product.service';
import { OrderProductController } from './order-product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderProduct } from './order-product.enity';
import { OrdersModule } from 'src/orders/orders.module';
import { ProductsModule } from 'src/products/products.module';
import { OrderShopingcartModule } from 'src/order-shopingcart/order-shopingcart.module';

@Module({
  providers: [OrderProductService],
  controllers: [OrderProductController],
  imports: [
    TypeOrmModule.forFeature([OrderProduct]),
    forwardRef(() => ProductsModule),
    forwardRef(() => OrdersModule),
    forwardRef(() => OrderShopingcartModule),
  ],
})
export class OrderProductModule {}
