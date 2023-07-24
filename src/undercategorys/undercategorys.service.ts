import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UnderCategorys } from './undercategorys.enity';
import { CreateUnderCategoryDto } from './dto/create-undercategory';

@Injectable()
export class UndercategorysService {
  constructor(
    @InjectRepository(UnderCategorys)
    private UnderCategorysRepository: Repository<UnderCategorys>,
  ) {}

  async CreateUnderCategory(dto: CreateUnderCategoryDto) {
    const undercategory = await this.UnderCategorysRepository.create(dto);
    return undercategory;
  }

  async getAllUnderCategory() {
    const undercategory = await this.UnderCategorysRepository.find({
      relations: {
        idCategory: true,
      },
    });
    return undercategory;
  }

  async getIdUnderCategory(id: number) {
    const undercategory = await this.UnderCategorysRepository.find({
      relations: {
        idCategory: true,
      },
      where: {
        idCategory: {
          id: id,
        },
      },
    });
    return undercategory;
  }

  async deleteUnderCategory(id: number) {
    return await this.UnderCategorysRepository.delete(id);
  }
}
