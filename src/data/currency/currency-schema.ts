import mongoose from 'mongoose';

export type CurrencyType = {
  name: string;
  price: number;
};

export const CurrencySchema = new mongoose.Schema<CurrencyType>({
  name: String,
  price: Number,
});

export const CurrencyModel = mongoose.model<CurrencyType & mongoose.Document>(
  'currency',
  CurrencySchema,
);
