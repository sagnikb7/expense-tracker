const {
  NODE_PORT,
  NODE_ENV,
  DEBUG,
  SERVICE_NAME,
} = process.env;

const appConfig = {
  SERVICE_NAME,
  NODE_PORT,
  NODE_ENV,
  DEBUG: !!(DEBUG),
};

module.exports = appConfig;
