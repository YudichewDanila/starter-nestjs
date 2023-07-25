import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderShopingcart } from 'src/order-shopingcart/order-shopingcart.enity';
import { Repository } from 'typeorm';
import { CreateOrderShopingDto } from './dto/create-order-shopingcart';

@Injectable()
export class OrderShopingcartService {
  constructor(
    @InjectRepository(OrderShopingcart)
    private OrderShopingCartRepository: Repository<OrderShopingcart>,
  ) {}
  async createOrderShopingCart(dto: CreateOrderShopingDto) {
    const OrderShopingCart = await this.OrderShopingCartRepository.save(dto);
    return OrderShopingCart;
  }
  async getOrderShopingCart(IdShopingCart: number) {
    const OrderShopingCart = await this.OrderShopingCartRepository.find({
      relations: {
        IdShopingCart: true,
        IdProducts: true,
      },
      where: { IdShopingCart: { id: IdShopingCart } },
    });
    return OrderShopingCart;
  }
  async getOrderOneShopingCart(idProductsId: number, IdShopingCart: number) {
    const OrderOneShopingCart = await this.OrderShopingCartRepository.findOne({
      relations: {
        IdShopingCart: true,
        IdProducts: true,
      },
      where: {
        IdProducts: { id: idProductsId },
        IdShopingCart: { id: IdShopingCart },
      },
    });
    return OrderOneShopingCart;
  }
  async deleteOrderShopingCart(IdShopingCart: number) {
    const OrderShopingCart = await this.OrderShopingCartRepository.delete({
      id: IdShopingCart,
    });
    return OrderShopingCart;
  }
  async deleteAllOrderShopingCart(idShopingCart) {
    const OrderShopingCart = await this.OrderShopingCartRepository.delete({
      IdShopingCart: { id: idShopingCart },
    });
    return OrderShopingCart;
  }
}
