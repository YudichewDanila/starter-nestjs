import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RolesUsers } from './roles-users.enity';
import { CreateRolesUsersDto } from './dto/create-roles-users';

@Injectable()
export class RolesUsersService {
  constructor(
    @InjectRepository(RolesUsers)
    private RolesUsersRepository: Repository<RolesUsers>,
  ) {}

  async createRolesUser(dto: CreateRolesUsersDto) {
    const roleuser = await this.RolesUsersRepository.create(dto);
    return roleuser;
  }

  async getAllRolesUser() {
    return this.RolesUsersRepository.find();
  }
}
