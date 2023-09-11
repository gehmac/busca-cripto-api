// import 'dotenv/config'
import getApp from './main';

getApp()
  .then(async (app) => {
    await app.listen(process.env.PORT || 3000, '0.0.0.0');
  })
  .catch(console.error);
