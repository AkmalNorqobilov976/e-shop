import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    
  })
  const config = new DocumentBuilder()
  .setTitle('Simple E-commerce')
  .setDescription('This project is for learing')
  .build();

  app.setGlobalPrefix('api');
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);
  await app.listen(process.env.PORT);
}
bootstrap();
