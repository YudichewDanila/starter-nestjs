import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { RolesUsers } from 'src/roles-users/roles-users.enity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  Surname: string;
  @Column()
  Name: string;
  @ManyToOne(() => RolesUsers)
  @JoinColumn()
  IdRole: RolesUsers;
  @Column()
  EmailUsers: string;
  @Column()
  NumberPhoneUsers: string;
  @Column()
  PasswordUsers: string;
}
