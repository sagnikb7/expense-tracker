const helmet = require('helmet');
const express = require('express');
const { printRequests } = require('../core/chalk');
const logger = require('../core/logger')('middleware');

const basicMiddleware = (app) => {
  // basic safety
  app.use(helmet());

  // body-parsers
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // log api endpoints
  app.use((req, res, next) => {
    logger.info(printRequests(`REQUEST > ${req.method} url:${req.url} ip:${req.ip}`));
    next();
  });
};

module.exports = basicMiddleware;
