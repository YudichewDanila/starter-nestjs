import { Module, forwardRef } from '@nestjs/common';
import { ShopingcartController } from './shopingcart.controller';
import { ShopingcartService } from './shopingcart.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopingCart } from './shopingcart.enity';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [ShopingcartController],
  providers: [ShopingcartService],
  imports: [
    TypeOrmModule.forFeature([ShopingCart]),
    forwardRef(() => UsersModule),
  ],
  exports: [ShopingcartService],
})
export class ShopingcartModule {}
