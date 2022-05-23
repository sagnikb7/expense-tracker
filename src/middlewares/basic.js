const helmet = require('helmet');

const basicMiddleware = (app) => {
  app.use(helmet());
};

module.exports = basicMiddleware;
