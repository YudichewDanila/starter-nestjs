import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categorys } from './categorys/categorys.enity';
import { UnderCategorys } from './undercategorys/undercategorys.enity';
import { Users } from './users/users.enity';
import { ShopingCart } from './shopingcart/shopingcart.enity';
import { RolesUsers } from './roles-users/roles-users.enity';
import { Products } from './products/products.enity';
import { PointOrders } from './point-orders/point-orders.enity';
import { Orders } from './orders/orders.enity';
import { OrderShopingcart } from './order-shopingcart/order-shopingcart.enity';
import { OrderProduct } from './order-product/order-product.enity';
import { Manyfacturers } from './manufacturers/manufacturers.enity';
import { UndercategorysModule } from './undercategorys/undercategorys.module';
import { CategorysModule } from './categorys/categorys.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ManufacturersModule } from './manufacturers/manufacturers.module';
import { ProductsModule } from './products/products.module';
import { RolesUsersModule } from './roles-users/roles-users.module';
import { UsersModule } from './users/users.module';
import { PointOrdersModule } from './point-orders/point-orders.module';
import { OrdersModule } from './orders/orders.module';
import { OrderProductModule } from './order-product/order-product.module';
import { SerchModule } from './serch/serch.module';
import { ShopingcartModule } from './shopingcart/shopingcart.module';
import { OrderShopingcartModule } from './order-shopingcart/order-shopingcart.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    
    TypeOrmModule.forRoot({
      entities: [
        Categorys, 
        UnderCategorys, 
        Users, 
        ShopingCart, 
        RolesUsers, 
        Products, 
        PointOrders, 
        Orders,
        OrderShopingcart,
        OrderProduct,
        Manyfacturers
      ],
      type: 'mysql',
      host: process.env.host,
      port: Number(process.env.portBd),
      username: process.env.usernameBd,
      password: process.env.password,
      database: process.env.database,
      //autoLoadEntities: true,
      //synchronize: true,
    }),
    CategorysModule,
    UndercategorysModule,
    ManufacturersModule,
    ProductsModule,
    RolesUsersModule,
    UsersModule,
    PointOrdersModule,
    OrdersModule,
    OrderProductModule,
    SerchModule,
    ShopingcartModule,
    OrderShopingcartModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
