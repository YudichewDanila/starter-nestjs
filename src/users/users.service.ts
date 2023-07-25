import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.enity';
import { CreateUsersDto } from './dto/create-users';
import { ShopingcartService } from 'src/shopingcart/shopingcart.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private UsersRepository: Repository<Users>,
    private ShopingService: ShopingcartService,
  ) {}

  async createUser(dto: CreateUsersDto) {
    const user = await this.UsersRepository.save(dto);
    await this.ShopingService.createShopingCart({ IdUsers: user });
    return user;
  }
  async getUserByEmail(EmailUsers: string) {
    try {
      const user = await this.UsersRepository.findOne({
        where: { EmailUsers },
      });
      return user;
    } catch {
      throw new UnauthorizedException({
        message: 'Некоректный емэйл или пароль',
      });
    }
  }
  async getUserById(Id: any) {
    const user = await this.UsersRepository.findOne({
      where: { id: Id.users.id },
    });
    const shopingCart = await this.ShopingService.getShopingCart(user.id);
    const dataUser = {
      id: user.id,
      Surname: user.Surname,
      Name: user.Name,
      IdRole: user.IdRole,
      EmailUsers: user.EmailUsers,
      NumberPhoneUsers: user.NumberPhoneUsers,
      shopingCart: shopingCart.id,
    };
    return dataUser;
  }
}
