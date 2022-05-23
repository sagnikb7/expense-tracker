const bankRouter = require('../modules/banks');

const mainRouter = (app) => {
  app.use('/banks', bankRouter);
};

module.exports = mainRouter;
