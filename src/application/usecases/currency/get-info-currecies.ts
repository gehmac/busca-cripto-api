import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetInfoCurrenciesQuery } from '../../../domain/queries/get-info-currencies-query';
import { CurrencyDao } from '../../../data/currency/currency-dao';

@QueryHandler(GetInfoCurrenciesQuery)
export class GetInfoCurrenciesUsecase
  implements IQueryHandler<GetInfoCurrenciesQuery, GetInfoCurrenciesQueryTypes>
{
  async execute(): Promise<GetInfoCurrenciesQueryTypes | any> {
    const result = await CurrencyDao.getCurrencies();
    return result;
  }
}

type GetInfoCurrenciesQueryTypes = {
  name: string;
  price: number;
}[];
