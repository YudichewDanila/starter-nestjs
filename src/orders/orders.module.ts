import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orders } from './orders.enity';

@Module({
  providers: [OrdersService],
  controllers: [OrdersController],
  imports: [TypeOrmModule.forFeature([Orders])],
  exports: [OrdersService],
})
export class OrdersModule {}
