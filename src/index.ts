import getApp from './main';
import * as dotenv from 'dotenv';

getApp()
  .then(async (app) => {
    dotenv.config();
    await app.listen(process.env.PORT || 3000, '0.0.0.0');
  })
  .catch(console.error);
