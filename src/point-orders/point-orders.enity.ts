import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PointOrders {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  country: string;
  @Column()
  city: string;
  @Column()
  street: string;
  @Column()
  numberHouse: string;
}
