import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Categorys {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  NameCategory: string;
}
