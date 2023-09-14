import { Controller, Get } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetInfoCurrenciesQuery } from '../../../domain/queries/get-info-currencies-query';
import mongoose from 'mongoose';
import { CurrencySchema } from '../../../data/currency/currency-schema';

// @Injectable()
@Controller({ path: 'info/currency', version: '*' })
export class CurrencyInfoController {
  constructor(
    private commandBus: CommandBus,
    private queryBus: QueryBus,
  ) {}

  @Get()
  async getCurrencyPrices() {
    const result = await this.queryBus.execute(new GetInfoCurrenciesQuery());
    return result;
  }
}
