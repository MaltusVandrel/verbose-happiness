import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getWarning(): string {
    return '<p style="color:red;">Perigo!</p>';
  }
}
