import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './auth/public.decorator';
import { Roles } from './auth/roles.decorator';
import { Role } from './auth/role.enum';

//@Public()
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Public()
  @Get()
  @Render('index')
  index() {
    return { message: 'Hello world!' };
  }

  @Roles(Role.Admin)
  @Get('warning')
  getWarning(): string {
    return this.appService.getWarning();
  }
}
