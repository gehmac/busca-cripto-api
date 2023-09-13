import { Controller, Get } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetInfoCurrenciesQuery } from '../../../domain/queries/get-info-currencies-query';

// @Injectable()
@Controller({ path: 'info/currency', version: '*' })
export class CurrencyInfoController {
  constructor(
    private commandBus: CommandBus,
    private queryBus: QueryBus,
  ) {}

  @Get()
  async getCurrencyPrices() {
    const result = this.queryBus.execute(new GetInfoCurrenciesQuery());
    return result;
  }
}
