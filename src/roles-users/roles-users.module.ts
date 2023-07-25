import { Module } from '@nestjs/common';
import { RolesUsersService } from './roles-users.service';
import { RolesUsersController } from './roles-users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesUsers } from './roles-users.enity';

@Module({
  providers: [RolesUsersService],
  controllers: [RolesUsersController],
  imports: [TypeOrmModule.forFeature([RolesUsers])],
})
export class RolesUsersModule {}
