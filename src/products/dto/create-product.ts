import { Manyfacturers } from 'src/manufacturers/manufacturers.enity';
import { UnderCategorys } from 'src/undercategorys/undercategorys.enity';
export class CreateProductDto {
  ImgProducts: string;
  NameProduct: string;
  DescriptionProduct: string;
  CountProducts: number;
  IdUnderCategory: UnderCategorys;
  PriceProducts: number;
  IdManufacturers: Manyfacturers;
}
