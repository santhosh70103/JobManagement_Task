import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  app.enableCors({
    origin: ['https://job-management-task-nwco.vercel.app', 'http://localhost:3000'], // Your frontend URLs
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, // If frontend needs to send cookies/auth headers
  });

  await app.listen(process.env.PORT ?? 8000);
}
bootstrap();
