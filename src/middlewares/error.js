const ERROR = require('../constants/errors');
const CONSTANTS = require('../constants/app');
const logger = require('../core/logger')('error-middleware');
const { printErrors } = require('../core/chalk');

const errorMiddleware = (app) => {
  app.use((req, res) => {
    res.status(404).json({ status: CONSTANTS.apiStatus.NOT_FOUND, data: null, error: ERROR.common.NOT_FOUND });
  });

  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    logger.error(`${printErrors(err.message)} \n${err.stack}`);
    res.status(err.status || 500)
      .json({ status: CONSTANTS.apiStatus.ERROR, data: null, error: { message: err.message } });
  });
};

module.exports = errorMiddleware;
