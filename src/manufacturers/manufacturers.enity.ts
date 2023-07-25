import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Manyfacturers {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  NameManufacturers: string;
}
