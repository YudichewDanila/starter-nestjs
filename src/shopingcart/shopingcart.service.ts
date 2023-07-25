import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ShopingCart } from './shopingcart.enity';
import { Repository } from 'typeorm';
import { CreateShopingCartDto } from './dto/CreateShopingCartDto';

@Injectable()
export class ShopingcartService {
  constructor(
    @InjectRepository(ShopingCart)
    private ShopingCartRepository: Repository<ShopingCart>,
  ) {}

  async createShopingCart(dto: CreateShopingCartDto) {
    const ShopingCart = await this.ShopingCartRepository.save(dto);
    return ShopingCart;
  }

  async getShopingCart(UserId: number) {
    const ShopingCart = await this.ShopingCartRepository.findOne({
      relations: {
        IdUsers: true,
      },
      where: { IdUsers: { id: UserId } },
    });
    return ShopingCart;
  }
}
