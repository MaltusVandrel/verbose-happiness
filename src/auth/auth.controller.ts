import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { Public } from './public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Public()
  @Post('login')
  signIn(@Body() signDTO: Record<string, any>) {
    return this.authService.signIn(signDTO.username, signDTO.password);
  }

  @Get('profile')
  getProfile(@Request() req: any) {
    console.log(req);
    return req.user;
  }
}
