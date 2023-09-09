import getApp from "./main";

getApp()
  .then(async (app) => {
    await app.listen(3000);
  })
  .catch(console.error);
