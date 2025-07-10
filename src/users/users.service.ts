import { Injectable } from '@nestjs/common';
import { Role } from 'src/auth/role.enum';
import { Roles } from 'src/auth/roles.decorator';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'matheus',
      password: 'cringe',
      roles: [Role.User],
    },
    {
      userId: 2,
      username: 'pablo',
      password: 'foda',
      roles: [Role.Admin],
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
