import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategorysController } from './categorys.controller';
import { CategorysService } from './categorys.service';
import { Categorys } from './categorys.enity';

@Module({
  controllers: [CategorysController],
  providers: [CategorysService],
  imports: [TypeOrmModule.forFeature([Categorys])],
})
export class CategorysModule {}
