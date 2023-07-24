import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Categorys } from 'src/categorys/categorys.enity';

@Entity()
export class UnderCategorys {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  NameUnderCategory: string;
  @ManyToOne(() => Categorys)
  @JoinColumn()
  idCategory: Categorys;
}
