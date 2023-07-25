import { Module } from '@nestjs/common';
import { SerchService } from './serch.service';
import { SerchController } from './serch.controller';

@Module({
  providers: [SerchService],
  controllers: [SerchController],
})
export class SerchModule {}
