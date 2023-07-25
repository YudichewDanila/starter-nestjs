import { Module } from '@nestjs/common';
import { OrderShopingcartController } from './order-shopingcart.controller';
import { OrderShopingcartService } from './order-shopingcart.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderShopingcart } from './order-shopingcart.enity';

@Module({
  controllers: [OrderShopingcartController],
  providers: [OrderShopingcartService],
  imports: [TypeOrmModule.forFeature([OrderShopingcart])],
  exports: [OrderShopingcartService],
})
export class OrderShopingcartModule {}
