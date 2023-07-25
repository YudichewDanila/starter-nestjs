import { Module, forwardRef } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users.enity';
import { AuthModule } from 'src/auth/auth.module';
import { ShopingcartModule } from 'src/shopingcart/shopingcart.module';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports: [
    TypeOrmModule.forFeature([Users]),
    forwardRef(() => AuthModule),
    ShopingcartModule,
  ],
  exports: [UsersService],
})
export class UsersModule {}
