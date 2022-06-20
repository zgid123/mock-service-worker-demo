/* eslint-disable @typescript-eslint/no-var-requires */
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  await app.listen(3000);
}

if (process.env.NDOE_ENV === 'development') {
  const { server } = require('./mocks/server');

  server.listen();
}

bootstrap();
