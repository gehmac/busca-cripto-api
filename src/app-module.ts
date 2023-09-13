import { Module } from '@nestjs/common';
import { ControllersModule } from './controllers/controller-module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UsecaseModuler } from './application/usecase-moduler';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(process.env.APP_MONGO_CONECTION),
    ControllersModule,
    UsecaseModuler,
  ],
})
export class AppModule {}
