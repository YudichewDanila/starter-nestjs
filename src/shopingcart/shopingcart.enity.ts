import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Users } from 'src/users/users.enity';

@Entity()
export class ShopingCart {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Users)
  @JoinColumn()
  IdUsers: Users;
}
