import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GetUsersDto } from 'src/users/dto/get-users';
import { CreateUsersDto } from 'src/users/dto/create-users';
import { Request, Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authServece: AuthService) {}

  @Post('/login')
  async login(
    @Req() req: Request,
    @Res({ passthrough: true }) response: Response,
    @Body() userdto: GetUsersDto,
  ) {
    const token = await this.authServece.login(req, userdto);
    response.cookie('token', token);
    return token;
  }

  @Post('/register')
  register(@Body() userdto: CreateUsersDto) {
    return this.authServece.register(userdto);
  }
}
