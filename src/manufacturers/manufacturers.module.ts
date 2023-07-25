import { Module } from '@nestjs/common';
import { ManufacturersController } from './manufacturers.controller';
import { ManufacturersService } from './manufacturers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Manyfacturers } from './manufacturers.enity';

@Module({
  controllers: [ManufacturersController],
  providers: [ManufacturersService],
  imports: [TypeOrmModule.forFeature([Manyfacturers])],
  exports: [ManufacturersService],
})
export class ManufacturersModule {}
