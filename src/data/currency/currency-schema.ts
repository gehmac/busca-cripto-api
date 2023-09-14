import mongoose from 'mongoose';
import { ModelProvider } from '../../_shared/config/model-provider';

export type CurrencyType = {
  name: string;
  price: number;
};

export const CurrencySchema = new mongoose.Schema<CurrencyType>({
  name: String,
  price: Number,
});

export const CurrencyModel = new ModelProvider(
  'currencies',
  'currencyTypes',
  CurrencySchema,
);
