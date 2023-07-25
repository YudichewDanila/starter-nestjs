import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Orders } from './orders.enity';
import { CreateOrdersDto } from './dto/create-orders';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Orders)
    private OrdersRepository: Repository<Orders>,
  ) {}

  async createOrders(dto: CreateOrdersDto) {
    const orders = await this.OrdersRepository.save(dto);
    return orders;
  }

  async updateOrders(idOrder) {
    await this.OrdersRepository.update(idOrder, {
      StatusOrder: true,
    });
  }

  async getAllOrders() {
    const orders = await this.OrdersRepository.find({
      relations: {
        IdShopingCart: true,
        IdPointOrders: true,
      },
    });
    return orders;
  }
}
