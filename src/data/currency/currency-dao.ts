import { CurrencyModel, CurrencyType } from './currency-schema';


export class CurrencyDao {
  static async getCurrencies() {
    // console.log(CurrencyModel);
    
    const result = await CurrencyModel.getModel<CurrencyType>().find({});
    return result;
  }
}
