import { CurrencyModel, CurrencyType } from './currency-schema';

export class CurrencyDao {
  static async getCurrencies() {
    const result = await CurrencyModel.getModel<CurrencyType>().find({});
    return result;
  }
}
