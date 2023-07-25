import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Orders } from 'src/orders/orders.enity';
import { Products } from 'src/products/products.enity';

@Entity()
export class OrderProduct {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Orders)
  @JoinColumn()
  IdOrders: Orders;
  @ManyToOne(() => Products)
  @JoinColumn()
  IdProducts: Products;
  @Column()
  CountProduct: number;
}
