import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Manyfacturers } from './manufacturers.enity';
import { CreateManufacturersDto } from './dto/create-manufacturers';

@Injectable()
export class ManufacturersService {
  constructor(
    @InjectRepository(Manyfacturers)
    private ManyfacturersRepository: Repository<Manyfacturers>,
  ) {}

  async createManyfacturer(dto: CreateManufacturersDto) {
    const Manyfacturer = await this.ManyfacturersRepository.create(dto);
    return Manyfacturer;
  }

  async getAllManyfacturer() {
    return await this.ManyfacturersRepository.find();
  }
}
