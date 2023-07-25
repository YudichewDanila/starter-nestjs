import { Module } from '@nestjs/common';
import { PointOrdersService } from './point-orders.service';
import { PointOrdersController } from './point-orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PointOrders } from './point-orders.enity';

@Module({
  providers: [PointOrdersService],
  controllers: [PointOrdersController],
  imports: [TypeOrmModule.forFeature([PointOrders])],
})
export class PointOrdersModule {}
