import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { Categorys } from './categorys.enity';

@Injectable()
export class CategorysService {
  constructor(
    @InjectRepository(Categorys)
 //   private CategorysRepository: Repository<Categorys>,
    @InjectConnection() private readonly connection: Connection,
  ) {}

  async createCategory(dto: { NameCategory: string }) {
  return 'Категории'
    //  const category = await this.CategorysRepository.create(dto);
  //  return category;
  }
  async getAllCategory() {
   // const category = await this.CategorysRepository.find();
   // return category;
  }

  async deleteCategory(id: number) {
   // return await this.CategorysRepository.delete(id);
  }
}
