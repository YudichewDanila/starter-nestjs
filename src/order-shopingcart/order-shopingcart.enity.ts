import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ShopingCart } from 'src/shopingcart/shopingcart.enity';
import { Products } from 'src/products/products.enity';

@Entity()
export class OrderShopingcart {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => ShopingCart)
  @JoinColumn()
  IdShopingCart: ShopingCart;
  @ManyToOne(() => Products)
  @JoinColumn()
  IdProducts: Products;
  @Column()
  CountProduct: number;
}
