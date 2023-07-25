import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDto } from './dto/create-users';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @UseGuards(JwtAuthGuard)
  @Post('/user')
  get(@Req() req: Request) {
    const id = req;
    return this.usersService.getUserById(id);
  }

  @Post()
  create(@Body() dto: CreateUsersDto) {
    return this.usersService.createUser(dto);
  }
}
