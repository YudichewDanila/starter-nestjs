import { Module, forwardRef } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from './products.enity';
import { ManufacturersModule } from 'src/manufacturers/manufacturers.module';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [
    TypeOrmModule.forFeature([Products]),
    forwardRef(() => ManufacturersModule),
  ],
  exports: [ProductsService],
})
export class ProductsModule {}
