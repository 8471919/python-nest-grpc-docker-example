import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { swaggerSetUp } from './config/swagger.config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  console.log('hi');
  console.log(process.env.ABC);
  console.log('bye');

  const app = await NestFactory.create(AppModule);

  swaggerSetUp(app);

  const options = new DocumentBuilder()
    .setTitle('Test API Swagger')
    .setDescription(
      '구분 가능한 사진 : 비행기, 자동차, 새, 고양이, 사슴, 개, 개구리, 말, 배, 트럭',
    )
    .setVersion('0.0.1')
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api-docs2', app, document);

  app.enableCors();

  await app.listen(3000);
}
bootstrap();
