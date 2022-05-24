const { NODE_ENV } = process.env;
require('dotenv').config({ path: `${__dirname}/${NODE_ENV}.env` });
require('module-alias/register');

const logger = require('./src/core/logger')('server');

const app = require('./src/app');
const config = require('./src/config/app');

app.listen(config.NODE_PORT, () => {
  logger.info(`server started on PORT:${config.NODE_PORT}`);
});
