import {
  HttpException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Users } from 'src/users/users.enity';
import { GetUsersDto } from 'src/users/dto/get-users';
import { CreateUsersDto } from 'src/users/dto/create-users';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}
  private async generateToken(newUser: Users) {
    const payload = {
      email: newUser.EmailUsers,
      roles: newUser.IdRole,
      id: newUser.id,
    };
    return { token: this.jwtService.sign(payload) };
  }

  private async validateUser(dto: GetUsersDto) {
    try {
      const user = await this.userService.getUserByEmail(dto.LoginUsers);
      const passwordEcquels = await bcrypt.compare(
        dto.PasswordUsers,
        user.PasswordUsers,
      );
      if (user && passwordEcquels) {
        return user;
      } else {
        throw new UnauthorizedException({
          message: 'Некоректный емэйл или пароль',
        });
      }
    } catch {
      throw new UnauthorizedException({
        message: 'Некоректный емэйл или пароль',
      });
    }
  }

  async login(req, dto: GetUsersDto) {
    const user = await this.validateUser(dto);
    const token = this.generateToken(user);
    return token;
  }

  async register(dto: CreateUsersDto) {
    const candidate = await this.userService.getUserByEmail(dto.EmailUsers);
    if (candidate) {
      throw new HttpException(
        'Пользователь с таким email уже существует ',
        400,
      );
    }
    const hashPassword = await bcrypt.hash(dto.PasswordUsers, 7);
    const newUser = await this.userService.createUser({
      ...dto,
      PasswordUsers: hashPassword,
    });
    return this.generateToken(newUser);
  }
}
