import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Manyfacturers } from 'src/manufacturers/manufacturers.enity';
import { UnderCategorys } from 'src/undercategorys/undercategorys.enity';

@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  ImgProducts: string;
  @Column()
  NameProduct: string;
  @Column()
  DescriptionProduct: string;
  @Column()
  CountProducts: number;
  @ManyToOne(() => UnderCategorys)
  @JoinColumn()
  IdUnderCategory: UnderCategorys;
  @Column()
  @Column({
    type: 'float',
  })
  PriceProducts: number;
  @ManyToOne(() => Manyfacturers)
  @JoinColumn()
  IdManufacturers: Manyfacturers;
  length: number;
}
