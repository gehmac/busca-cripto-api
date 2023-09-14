import { Module } from '@nestjs/common';
import { CurrencyInfoController } from './currency/info/currency-info-controller';
import { CqrsModule } from '@nestjs/cqrs';


@Module({
  imports: [
    CqrsModule, 
  ],
  controllers: [CurrencyInfoController],
})
export class ControllersModule {}
