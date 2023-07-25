import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ShopingCart } from 'src/shopingcart/shopingcart.enity';
import { PointOrders } from 'src/point-orders/point-orders.enity';

@Entity()
export class Orders {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => ShopingCart)
  @JoinColumn()
  IdShopingCart: ShopingCart;
  @ManyToOne(() => PointOrders)
  @JoinColumn()
  IdPointOrders: PointOrders;
  @Column({
    type: 'date',
  })
  DataProducts: Date;
  @Column()
  StatusOrder: boolean;
  @Column()
  FullPrice: number;
}
