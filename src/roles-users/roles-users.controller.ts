import { Body, Controller, Post, Get } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { RolesUsersService } from './roles-users.service';
import { CreateRolesUsersDto } from './dto/create-roles-users';

@Controller('roles-users')
export class RolesUsersController {
  constructor(private RolesUsersService: RolesUsersService) {}
  @Post()
  create(@Body() dto: CreateRolesUsersDto) {
    return this.RolesUsersService.createRolesUser(dto);
  }

  @Get()
  getAll() {
    return this.RolesUsersService.getAllRolesUser();
  }
}
