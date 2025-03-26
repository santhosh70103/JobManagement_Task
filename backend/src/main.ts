import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  app.enableCors({
    origin: 'https://job-management-task-1ymmxhwlh-santhoshs-projects-d8275fc3.vercel.app/', // Change this to your frontend URL
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
  });

  await app.listen(process.env.PORT ?? 8000);
}
bootstrap();
