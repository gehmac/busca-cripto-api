import { NestFactory } from '@nestjs/core';
import { INestApplication } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app-module';

let app: INestApplication;

function configureApp(appModule: INestApplication): void {
  appModule.enableCors();
  appModule.enableVersioning();
}

async function createAppModule(): Promise<NestExpressApplication> {
  const appModule = await NestFactory.create<NestExpressApplication>(AppModule);
  configureApp(appModule);
  return appModule;
}

export default async function getApp(): Promise<INestApplication> {
  if (!app) {
    app = await createAppModule();
    await app.init();
  }
  return app;
}
