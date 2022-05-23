/* eslint-disable no-shadow */
const { createLogger, format, transports } = require('winston');
const { DEBUG } = require('../config/app');

const {
  combine, timestamp, label, printf,
} = format;

const myFormat = printf(({
  level, message, label, timestamp,
}) => `${timestamp} ${label} [${level.toUpperCase()}]: ${message}`);

const logger = (file) => createLogger({
  silent: !DEBUG,
  level: 'info',
  transports: [
    new transports.File({ filename: 'error.log', level: 'error' }),
    new transports.Console(),
  ],
  format: combine(
    label({ label: file }),
    timestamp(),
    myFormat,
  ),
});

module.exports = logger;
