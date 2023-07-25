import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, In, Like, Repository } from 'typeorm';
import { Products } from './products.enity';
import { CreateProductDto } from './dto/create-product';
import { ManufacturersService } from '../manufacturers/manufacturers.service';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private ProductsRepository: Repository<Products>,
    private manufacturersService: ManufacturersService,
  ) {}

  async createProduct(dto: CreateProductDto) {
    const product = await this.ProductsRepository.create(dto);
    return product;
  }
  async deleteProduct(id: number) {
    const product = await this.ProductsRepository.delete(id);
    return product;
  }
  async getAllProduct(params: { take?: number; page?: number }) {
    const take = params.take || 5;
    const page = params.page || 1;
    const skip = (page - 1) * take;
    const product = await this.ProductsRepository.findAndCount({
      take: take,
      skip: skip,
      relations: {
        IdManufacturers: true,
        IdUnderCategory: true,
      },
    });
    return product;
  }
  async getCategoryProduct(params: {
    take: number;
    page: number;
    price: string;
    undercategory: number;
    manifacturs: string;
  }) {
    const take = params.take;
    const page = params.page;
    let product = [];
    let arrayManifacturs;
    if (params.manifacturs != '') {
      arrayManifacturs = params.manifacturs.slice(0, -1).split('-');
    }
    const priceMin = params.price.split('-')[0];
    const priceMax = params.price.split('-')[1];
    const skip = (page - 1) * take;
    if (params.manifacturs != '') {
      product = await this.ProductsRepository.findAndCount({
        take: take,
        skip: skip,
        relations: {
          IdManufacturers: true,
          IdUnderCategory: true,
        },
        where: {
          IdUnderCategory: { id: params.undercategory },
          PriceProducts: Between(Number(priceMin), Number(priceMax)),
          IdManufacturers: { NameManufacturers: In(arrayManifacturs) },
        },
      });
    } else {
      product = await this.ProductsRepository.findAndCount({
        take: take,
        skip: skip,
        relations: {
          IdManufacturers: true,
          IdUnderCategory: true,
        },
        where: {
          IdUnderCategory: { id: params.undercategory },
          PriceProducts: Between(Number(priceMin), Number(priceMax)),
        },
      });
    }
    return product;
  }
  async updateCountProduct(IdProducts: any, count: number) {
    await this.ProductsRepository.update(IdProducts, {
      CountProducts: count,
    });
  }
  async serchProduct(serchText: string) {
    const product = await this.ProductsRepository.find({
      where: {
        NameProduct: Like(`%${serchText}%`),
      },
    });
    return product;
  }
}
