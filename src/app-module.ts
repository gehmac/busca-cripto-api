import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsecaseModuler } from './application/usecase-moduler';
import { ControllersModule } from './controllers/controller-module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(process.env.APP_MONGO_CONECTION!),
    ControllersModule,
    UsecaseModuler,
  ],
})
export class AppModule {}
