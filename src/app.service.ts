import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('1'+`${process.env.numberPORT}`);
    return `${'Hello world'+process.env.numberPORT}`;
  }
}
