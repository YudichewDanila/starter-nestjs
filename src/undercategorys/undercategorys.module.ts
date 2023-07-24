import { Module } from '@nestjs/common';
import { UndercategorysService } from './undercategorys.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UndercategorysController } from './undercategorys.controller';
import { UnderCategorys } from './undercategorys.enity';

@Module({
  controllers: [UndercategorysController],
  providers: [UndercategorysService],
  imports: [TypeOrmModule.forFeature([UnderCategorys])],
})
export class UndercategorysModule {}
