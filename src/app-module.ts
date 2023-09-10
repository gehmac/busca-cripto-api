import { Module } from '@nestjs/common';
import { ControllersModule } from './controllers/controller-module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

console.log(process.env.APP_MONGO_CONECTION);

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(process.env.APP_MONGO_CONECTION),
    ControllersModule,
  ],
})
export class AppModule {}
