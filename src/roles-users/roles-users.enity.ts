import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RolesUsers {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  NameRolesUsers: string;
}
