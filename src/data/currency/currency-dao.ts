import { CurrencyModel } from './currency-schema';

export class CurrencyDao {
  static async getCurrencies() {
    const result = await CurrencyModel.find({}).lean().exec();
    return result;
  }
}
