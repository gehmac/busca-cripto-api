import { Module } from "@nestjs/common";
import { CurrencyInfoController } from "./currency/info/currency-info-controller";
// import { ConfigModule } from "src/_shared/config-module";

@Module({
  // imports: [ConfigModule],
  controllers: [CurrencyInfoController]
})

export class ControllersModule { }