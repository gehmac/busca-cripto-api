import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { GetInfoCurrenciesUsecase } from './usecases/currency/get-info-currecies';

@Module({
  imports: [CqrsModule],
  providers: [GetInfoCurrenciesUsecase],
})
export class UsecaseModuler {}
