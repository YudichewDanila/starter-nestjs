import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.numberPORT);
  console.log(process.env.numberPORT);
  console.log('Start server!');
}
bootstrap();
