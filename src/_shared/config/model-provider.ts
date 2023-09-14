import mongoose, { Schema } from 'mongoose';

export class ModelProvider {
  private colectionName: string;
  private name: string;
  private schema: Schema;

  constructor(colectionName: string, name: string, schema: Schema) {
    this.colectionName = colectionName;
    this.name = name;
    this.schema = schema;
  }

  getModel<T>() {
    const ConnectionProvider = mongoose.createConnection;
    const connection = ConnectionProvider(process.env.APP_MONGO_CONECTION!, {
      dbName: this.colectionName,
    });
    return connection.model<T & mongoose.Document>(this.name, this.schema);
  }
}

export type GetModel = {
  colectionName: string;
  name: string;
  schema: Schema;
};
