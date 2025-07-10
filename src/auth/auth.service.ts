import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  /*
  fetch("http://localhost:3000/auth/login", {
    "headers": {
      "Content-Type": "application/json",
      "access_token":"pikachu.geodude.vaporeon"
    },
    "body": '{"username": "pablo", "password": "foda"}',
    "method": "POST",
    "mode": "cors",
    "credentials": "omit"
  });

  fetch("http://localhost:3000/warning", {
    "headers": {
      "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoicGFibG8iLCJyb2xlcyI6WyJhZG1pbiJdLCJpYXQiOjE3NTIxNzU3MDYsImV4cCI6MTc1MjE3NTgyNn0.nwlOBXppdcsrUW_6mKDobVYQzgZnrQo_0PvNeps8p9Y"
    },
    "method": "GET",
    "mode": "cors",
    "credentials": "omit"
  });
  */
  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = {
      sub: user.userId,
      username: user.username,
      roles: user.roles,
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
