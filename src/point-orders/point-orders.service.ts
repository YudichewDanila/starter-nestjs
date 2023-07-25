import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PointOrders } from './point-orders.enity';
import { CreatePointOrdersDto } from './dto/create-point-orders';

@Injectable()
export class PointOrdersService {
  constructor(
    @InjectRepository(PointOrders)
    private PointOrdersRepository: Repository<PointOrders>,
  ) {}
  async createPointOrders(dto: CreatePointOrdersDto) {
    const pointorders = await this.PointOrdersRepository.create(dto);
    return pointorders;
  }
  async getAllPointOrders() {
    const pointorders = await this.PointOrdersRepository.find();
    return pointorders;
  }
}
