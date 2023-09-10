import { Module } from '@nestjs/common';
import { CurrencyInfoController } from './currency/info/currency-info-controller';

@Module({
  controllers: [CurrencyInfoController],
})
export class ControllersModule {}
