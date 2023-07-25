import { RolesUsers } from 'src/roles-users/roles-users.enity';
export class CreateUsersDto {
  Surname: string;
  Name: string;
  IdRole: RolesUsers;
  EmailUsers: string;
  NumberPhoneUsers: string;
  PasswordUsers: string;
}
