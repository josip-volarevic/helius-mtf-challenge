import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('☀️ Helius MTF API')
    .setDescription("API endpoints for 'Mint the Flag' challenge")
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  app.enableCors();
  await app.listen(process.env.PORT || 3005);
}

bootstrap();
