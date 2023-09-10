import { Controller, Get } from "@nestjs/common";

@Controller({ path: 'info/currency', version: '*' })
export class CurrencyInfoController {

  @Get()
  async getCurrencyPrices() {
    console.log("oiii");

  }
}