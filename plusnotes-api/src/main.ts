import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Global olarak CORS için düzenleme
  await app.listen(3000); // API’nin dinleyeceği portu belirtin
}
bootstrap();
  